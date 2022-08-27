/*
 dhtmlxScheduler v.4.1.0 Stardard

 This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

 (c) Dinamenta, UAB.
 */
scheduler.config.limit_start = null, scheduler.config.limit_end = null, scheduler.config.limit_view = !1, scheduler.config.check_limits = !0, scheduler.config.mark_now = !0, scheduler.config.display_marked_timespans = !0, scheduler._temp_limit_scope = function () {
    function e(e, t, s, r, i) {
        var a = scheduler, n = [], d = {_props: "map_to", matrix: "y_property"};
        for (var l in d) {
            var o = d[l];
            if (a[l])for (var h in a[l]) {
                var _ = a[l][h], c = _[o];
                e[c] && (n = a._add_timespan_zones(n, scheduler._get_blocked_zones(t[h], e[c], s, r, i)))
            }
        }
        return n = a._add_timespan_zones(n, scheduler._get_blocked_zones(t, "global", s, r, i))
    }

    var t = null, s = "dhx_time_block", r = "default", i = function (e, t, s) {
        return t instanceof Date && s instanceof Date ? (e.start_date = t, e.end_date = s) : (e.days = t, e.zones = s), e
    }, a = function (e, t, r) {
        var a = "object" == typeof e ? e : {days: e};
        return a.type = s, a.css = "", t && (r && (a.sections = r), a = i(a, e, t)), a
    };
    scheduler.blockTime = function (e, t, s) {
        var r = a(e, t, s);
        return scheduler.addMarkedTimespan(r)
    }, scheduler.unblockTime = function (e, t, s) {
        t = t || "fullday";
        var r = a(e, t, s);
        return scheduler.deleteMarkedTimespan(r)
    }, scheduler.attachEvent("onBeforeViewChange", function (e, t, s, r) {
        return scheduler.config.limit_view && (r = r || t, s = s || e, r.valueOf() > scheduler.config.limit_end.valueOf() || this.date.add(r, 1, s) <= scheduler.config.limit_start.valueOf()) ? (setTimeout(function () {
            scheduler.setCurrentView(t || scheduler.config.limit_start, s)
        }, 1), !1) : !0
    }), scheduler.checkInMarkedTimespan = function (t, s, i) {
        s = s || r;
        for (var a = !0, n = new Date(t.start_date.valueOf()), d = scheduler.date.add(n, 1, "day"), l = scheduler._marked_timespans; n < t.end_date; n = scheduler.date.date_part(d), d = scheduler.date.add(n, 1, "day")) {
            var o = +scheduler.date.date_part(new Date(n)), h = n.getDay(), _ = e(t, l, h, o, s);
            if (_)for (var c = 0; c < _.length; c += 2) {
                var u = scheduler._get_zone_minutes(n), f = t.end_date > d || t.end_date.getDate() != n.getDate() ? 1440 : scheduler._get_zone_minutes(t.end_date), v = _[c], g = _[c + 1];
                if (f > v && g > u && (a = "function" == typeof i ? i(t, u, f, v, g) : !1, !a))break
            }
        }
        return!a
    };
    var n = scheduler.checkLimitViolation = function (e) {
        if (!e)return!0;
        if (!scheduler.config.check_limits)return!0;
        var t = scheduler, r = t.config, i = [];
        if (e.rec_type)for (var a = scheduler.getRecDates(e), n = 0; n < a.length; n++) {
            var d = scheduler._copy_event(e);
            scheduler._lame_copy(d, a[n]), i.push(d)
        } else i = [e];
        for (var l = !0, o = 0; o < i.length; o++) {
            var h = !0, d = i[o];
            d._timed = scheduler.isOneDayEvent(d), h = r.limit_start && r.limit_end ? d.start_date.valueOf() >= r.limit_start.valueOf() && d.end_date.valueOf() <= r.limit_end.valueOf() : !0, h && (h = !scheduler.checkInMarkedTimespan(d, s, function (e, s, r, i, a) {
                var n = !0;
                return a >= s && s >= i && ((1440 == a || a > r) && (n = !1), e._timed && t._drag_id && "new-size" == t._drag_mode ? (e.start_date.setHours(0), e.start_date.setMinutes(a)) : n = !1), (r >= i && a > r || i > s && r > a) && (e._timed && t._drag_id && "new-size" == t._drag_mode ? (e.end_date.setHours(0), e.end_date.setMinutes(i)) : n = !1), n
            })), h || (h = t.checkEvent("onLimitViolation") ? t.callEvent("onLimitViolation", [d.id, d]) : h), l = l && h
        }
        return l || (t._drag_id = null, t._drag_mode = null), l
    };
    scheduler._get_blocked_zones = function (e, t, s, r, i) {
        var a = [];
        if (e && e[t])for (var n = e[t], d = this._get_relevant_blocked_zones(s, r, n, i), l = 0; l < d.length; l++)a = this._add_timespan_zones(a, d[l].zones);
        return a
    }, scheduler._get_relevant_blocked_zones = function (e, t, s, r) {
        var i = s[t] && s[t][r] ? s[t][r] : s[e] && s[e][r] ? s[e][r] : [];
        return i
    }, scheduler.attachEvent("onMouseDown", function (e) {
        return!(e == s)
    }), scheduler.attachEvent("onBeforeDrag", function (e) {
        return e ? n(scheduler.getEvent(e)) : !0
    }), scheduler.attachEvent("onClick", function (e) {
        return n(scheduler.getEvent(e))
    }), scheduler.attachEvent("onBeforeLightbox", function (e) {
        var s = scheduler.getEvent(e);
        return t = [s.start_date, s.end_date], n(s)
    }), scheduler.attachEvent("onEventSave", function (e, t) {
        if (!t.start_date || !t.end_date) {
            var s = scheduler.getEvent(e);
            t.start_date = new Date(s.start_date), t.end_date = new Date(s.end_date)
        }
        if (t.rec_type) {
            var r = scheduler._lame_clone(t);
            return scheduler._roll_back_dates(r), n(r)
        }
        return n(t)
    }), scheduler.attachEvent("onEventAdded", function (e) {
        if (!e)return!0;
        var t = scheduler.getEvent(e);
        return!n(t) && scheduler.config.limit_start && scheduler.config.limit_end && (t.start_date < scheduler.config.limit_start && (t.start_date = new Date(scheduler.config.limit_start)), t.start_date.valueOf() >= scheduler.config.limit_end.valueOf() && (t.start_date = this.date.add(scheduler.config.limit_end, -1, "day")), t.end_date < scheduler.config.limit_start && (t.end_date = new Date(scheduler.config.limit_start)), t.end_date.valueOf() >= scheduler.config.limit_end.valueOf() && (t.end_date = this.date.add(scheduler.config.limit_end, -1, "day")), t.start_date.valueOf() >= t.end_date.valueOf() && (t.end_date = this.date.add(t.start_date, this.config.event_duration || this.config.time_step, "minute")), t._timed = this.isOneDayEvent(t)), !0
    }), scheduler.attachEvent("onEventChanged", function (e) {
        if (!e)return!0;
        var s = scheduler.getEvent(e);
        if (!n(s)) {
            if (!t)return!1;
            s.start_date = t[0], s.end_date = t[1], s._timed = this.isOneDayEvent(s)
        }
        return!0
    }), scheduler.attachEvent("onBeforeEventChanged", function (e) {
        return n(e)
    }), scheduler.attachEvent("onBeforeEventCreated", function (e) {
        var t = scheduler.getActionData(e).date, s = {_timed: !0, start_date: t, end_date: scheduler.date.add(t, scheduler.config.time_step, "minute")};
        return n(s)
    }), scheduler.attachEvent("onViewChange", function () {
        scheduler._mark_now()
    }), scheduler.attachEvent("onSchedulerResize", function () {
        return window.setTimeout(function () {
            scheduler._mark_now()
        }, 1), !0
    }), scheduler.attachEvent("onTemplatesReady", function () {
        scheduler._mark_now_timer = window.setInterval(function () {
            scheduler._is_initialized() && scheduler._mark_now()
        }, 6e4)
    }), scheduler._mark_now = function (e) {
        var t = "dhx_now_time";
        this._els[t] || (this._els[t] = []);
        var s = scheduler._currentDate(), r = this.config;
        if (scheduler._remove_mark_now(), !e && r.mark_now && s < this._max_date && s > this._min_date && s.getHours() >= r.first_hour && s.getHours() < r.last_hour) {
            var i = this.locate_holder_day(s);
            this._els[t] = scheduler._append_mark_now(i, s)
        }
    }, scheduler._append_mark_now = function (e, t) {
        var s = "dhx_now_time", r = scheduler._get_zone_minutes(t), i = {zones: [r, r + 1], css: s, type: s};
        if (!this._table_view) {
            if (this._props && this._props[this._mode]) {
                for (var a = this._els.dhx_cal_data[0].childNodes, n = [], d = 0; d < a.length - 1; d++) {
                    var l = e + d;
                    i.days = l;
                    var o = scheduler._render_marked_timespan(i, null, l)[0];
                    n.push(o)
                }
                return n
            }
            return i.days = e, scheduler._render_marked_timespan(i, null, e)
        }
        return"month" == this._mode ? (i.days = +scheduler.date.date_part(t), scheduler._render_marked_timespan(i, null, null)) : void 0
    }, scheduler._remove_mark_now = function () {
        for (var e = "dhx_now_time", t = this._els[e], s = 0; s < t.length; s++) {
            var r = t[s], i = r.parentNode;
            i && i.removeChild(r)
        }
        this._els[e] = []
    }, scheduler._marked_timespans = {global: {}}, scheduler._get_zone_minutes = function (e) {
        return 60 * e.getHours() + e.getMinutes()
    }, scheduler._prepare_timespan_options = function (e) {
        var t = [], s = [];
        if ("fullweek" == e.days && (e.days = [0, 1, 2, 3, 4, 5, 6]), e.days instanceof Array) {
            for (var i = e.days.slice(), a = 0; a < i.length; a++) {
                var n = scheduler._lame_clone(e);
                n.days = i[a], t.push.apply(t, scheduler._prepare_timespan_options(n))
            }
            return t
        }
        if (!e || !(e.start_date && e.end_date && e.end_date > e.start_date || void 0 !== e.days && e.zones))return t;
        var d = 0, l = 1440;
        "fullday" == e.zones && (e.zones = [d, l]), e.zones && e.invert_zones && (e.zones = scheduler.invertZones(e.zones)), e.id = scheduler.uid(), e.css = e.css || "", e.type = e.type || r;
        var o = e.sections;
        if (o) {
            for (var h in o)if (o.hasOwnProperty(h)) {
                var _ = o[h];
                _ instanceof Array || (_ = [_]);
                for (var a = 0; a < _.length; a++) {
                    var c = scheduler._lame_copy({}, e);
                    c.sections = {}, c.sections[h] = _[a], s.push(c)
                }
            }
        } else s.push(e);
        for (var u = 0; u < s.length; u++) {
            var f = s[u], v = f.start_date, g = f.end_date;
            if (v && g)for (var m = scheduler.date.date_part(new Date(v)), p = scheduler.date.add(m, 1, "day"); g > m;) {
                var c = scheduler._lame_copy({}, f);
                delete c.start_date, delete c.end_date, c.days = m.valueOf();
                var x = v > m ? scheduler._get_zone_minutes(v) : d, y = g > p || g.getDate() != m.getDate() ? l : scheduler._get_zone_minutes(g);
                c.zones = [x, y], t.push(c), m = p, p = scheduler.date.add(p, 1, "day")
            } else f.days instanceof Date && (f.days = scheduler.date.date_part(f.days).valueOf()), f.zones = e.zones.slice(), t.push(f)
        }
        return t
    }, scheduler._get_dates_by_index = function (e, t, s) {
        var r = [];
        t = scheduler.date.date_part(new Date(t || scheduler._min_date)), s = new Date(s || scheduler._max_date);
        for (var i = t.getDay(), a = e - i >= 0 ? e - i : 7 - t.getDay() + e, n = scheduler.date.add(t, a, "day"); s > n; n = scheduler.date.add(n, 1, "week"))r.push(n);
        return r
    }, scheduler._get_css_classes_by_config = function (e) {
        var t = [];
        return e.type == s && (t.push(s), e.css && t.push(s + "_reset")), t.push("dhx_marked_timespan", e.css), t.join(" ")
    }, scheduler._get_block_by_config = function (e) {
        var t = document.createElement("DIV");
        return e.html && ("string" == typeof e.html ? t.innerHTML = e.html : t.appendChild(e.html)), t
    }, scheduler._render_marked_timespan = function (e, t, s) {
        var r = [], i = scheduler.config, a = this._min_date, n = this._max_date, d = !1;
        if (!i.display_marked_timespans)return r;
        if (!s && 0 !== s) {
            if (e.days < 7)s = e.days; else {
                var l = new Date(e.days);
                if (d = +l, !(+n > +l && +l >= +a))return r;
                s = l.getDay()
            }
            var o = a.getDay();
            o > s ? s = 7 - (o - s) : s -= o
        }
        var h = e.zones, _ = scheduler._get_css_classes_by_config(e);
        if (scheduler._table_view && "month" == scheduler._mode) {
            var c = [], u = [];
            if (t)c.push(t), u.push(s); else {
                u = d ? [d] : scheduler._get_dates_by_index(s);
                for (var f = 0; f < u.length; f++)c.push(this._scales[u[f]])
            }
            for (var f = 0; f < c.length; f++) {
                t = c[f], s = u[f];
                var v = Math.floor((this._correct_shift(s, 1) - a.valueOf()) / (864e5 * this._cols.length)), g = this.locate_holder_day(s, !1) % this._cols.length;
                if (!this._ignores[g]) {
                    var m = scheduler._get_block_by_config(e), p = Math.max(t.offsetHeight - 1, 0), x = Math.max(t.offsetWidth - 1, 0), y = this._colsS[g], b = this._colsS.heights[v] + (this._colsS.height ? this.xy.month_scale_height + 2 : 2) - 1;
                    m.className = _, m.style.top = b + "px", m.style.lineHeight = m.style.height = p + "px";
                    for (var w = 0; w < h.length; w += 2) {
                        var E = h[f], D = h[f + 1];
                        if (E >= D)return[];
                        var k = m.cloneNode(!0);
                        k.style.left = y + Math.round(E / 1440 * x) + "px", k.style.width = Math.round((D - E) / 1440 * x) + "px", t.appendChild(k), r.push(k)
                    }
                }
            }
        } else {
            var M = s;
            if (this._ignores[this.locate_holder_day(s, !1)])return r;
            if (this._props && this._props[this._mode] && e.sections && e.sections[this._mode]) {
                var N = this._props[this._mode];
                M = N.order[e.sections[this._mode]], N.size && M > N.position + N.size && (M = 0)
            }
            t = t ? t : scheduler.locate_holder(M);
            for (var f = 0; f < h.length; f += 2) {
                var E = Math.max(h[f], 60 * i.first_hour), D = Math.min(h[f + 1], 60 * i.last_hour);
                if (E >= D) {
                    if (f + 2 < h.length)continue;
                    return[]
                }
                var k = scheduler._get_block_by_config(e);
                k.className = _;
                var O = 24 * this.config.hour_size_px + 1, L = 36e5;
                k.style.top = Math.round((60 * E * 1e3 - this.config.first_hour * L) * this.config.hour_size_px / L) % O + "px", k.style.lineHeight = k.style.height = Math.max(Math.round(60 * (D - E) * 1e3 * this.config.hour_size_px / L) % O, 1) + "px", t.appendChild(k), r.push(k)
            }
        }
        return r
    }, scheduler.markTimespan = function (e) {
        var t = scheduler._prepare_timespan_options(e);
        if (t.length) {
            for (var s = [], r = 0; r < t.length; r++) {
                var i = t[r], a = scheduler._render_marked_timespan(i, null, null);
                a.length && s.push.apply(s, a)
            }
            return s
        }
    }, scheduler.unmarkTimespan = function (e) {
        if (e)for (var t = 0; t < e.length; t++) {
            var s = e[t];
            s.parentNode && s.parentNode.removeChild(s)
        }
    }, scheduler._marked_timespans_ids = {}, scheduler.addMarkedTimespan = function (e) {
        var t = scheduler._prepare_timespan_options(e), s = "global";
        if (t.length) {
            var r = t[0].id, i = scheduler._marked_timespans, a = scheduler._marked_timespans_ids;
            a[r] || (a[r] = []);
            for (var n = 0; n < t.length; n++) {
                var d = t[n], l = d.days, o = (d.zones, d.css, d.sections), h = d.type;
                if (d.id = r, o) {
                    for (var _ in o)if (o.hasOwnProperty(_)) {
                        i[_] || (i[_] = {});
                        var c = o[_], u = i[_];
                        u[c] || (u[c] = {}), u[c][l] || (u[c][l] = {}), u[c][l][h] || (u[c][l][h] = [], scheduler._marked_timespans_types || (scheduler._marked_timespans_types = {}), scheduler._marked_timespans_types[h] || (scheduler._marked_timespans_types[h] = !0));
                        var f = u[c][l][h];
                        d._array = f, f.push(d), a[r].push(d)
                    }
                } else {
                    i[s][l] || (i[s][l] = {}), i[s][l][h] || (i[s][l][h] = []), scheduler._marked_timespans_types || (scheduler._marked_timespans_types = {}), scheduler._marked_timespans_types[h] || (scheduler._marked_timespans_types[h] = !0);
                    var f = i[s][l][h];
                    d._array = f, f.push(d), a[r].push(d)
                }
            }
            return r
        }
    }, scheduler._add_timespan_zones = function (e, t) {
        var s = e.slice();
        if (t = t.slice(), !s.length)return t;
        for (var r = 0; r < s.length; r += 2)for (var i = s[r], a = s[r + 1], n = r + 2 == s.length, d = 0; d < t.length; d += 2) {
            var l = t[d], o = t[d + 1];
            if (o > a && a >= l || i > l && o >= i)s[r] = Math.min(i, l), s[r + 1] = Math.max(a, o), r -= 2; else {
                if (!n)continue;
                var h = i > l ? 0 : 2;
                s.splice(r + h, 0, l, o)
            }
            t.splice(d--, 2);
            break
        }
        return s
    }, scheduler._subtract_timespan_zones = function (e, t) {
        for (var s = e.slice(), r = 0; r < s.length; r += 2)for (var i = s[r], a = s[r + 1], n = 0; n < t.length; n += 2) {
            var d = t[n], l = t[n + 1];
            if (l > i && a > d) {
                var o = !1;
                i >= d && l >= a && s.splice(r, 2), d > i && (s.splice(r, 2, i, d), o = !0), a > l && s.splice(o ? r + 2 : r, o ? 0 : 2, l, a), r -= 2;
                break
            }
        }
        return s
    }, scheduler.invertZones = function (e) {
        return scheduler._subtract_timespan_zones([0, 1440], e.slice())
    }, scheduler._delete_marked_timespan_by_id = function (e) {
        var t = scheduler._marked_timespans_ids[e];
        if (t)for (var s = 0; s < t.length; s++)for (var r = t[s], i = r._array, a = 0; a < i.length; a++)if (i[a] == r) {
            i.splice(a, 1);
            break
        }
    }, scheduler._delete_marked_timespan_by_config = function (e) {
        var t = scheduler._marked_timespans, s = e.sections, i = e.days, a = e.type || r, n = [];
        if (s) {
            for (var d in s)if (s.hasOwnProperty(d) && t[d]) {
                var l = s[d];
                t[d][l] && t[d][l][i] && t[d][l][i][a] && (n = t[d][l][i][a])
            }
        } else t.global[i] && t.global[i][a] && (n = t.global[i][a]);
        for (var o = 0; o < n.length; o++) {
            var h = n[o], _ = scheduler._subtract_timespan_zones(h.zones, e.zones);
            if (_.length)h.zones = _; else {
                n.splice(o, 1), o--;
                for (var c = scheduler._marked_timespans_ids[h.id], u = 0; u < c.length; u++)if (c[u] == h) {
                    c.splice(u, 1);
                    break
                }
            }
        }
    }, scheduler.deleteMarkedTimespan = function (e) {
        if (arguments.length || (scheduler._marked_timespans = {global: {}}, scheduler._marked_timespans_ids = {}, scheduler._marked_timespans_types = {}), "object" != typeof e)scheduler._delete_marked_timespan_by_id(e);
        else {
            e.start_date && e.end_date || (e.days || (e.days = "fullweek"), e.zones || (e.zones = "fullday"));
            var t = [];
            if (e.type)t.push(e.type); else for (var s in scheduler._marked_timespans_types)t.push(s);
            for (var r = scheduler._prepare_timespan_options(e), i = 0; i < r.length; i++)for (var a = r[i], n = 0; n < t.length; n++) {
                var d = scheduler._lame_clone(a);
                d.type = t[n], scheduler._delete_marked_timespan_by_config(d)
            }
        }
    }, scheduler._get_types_to_render = function (e, t) {
        var s = e ? scheduler._lame_copy({}, e) : {};
        for (var r in t || {})t.hasOwnProperty(r) && (s[r] = t[r]);
        return s
    }, scheduler._get_configs_to_render = function (e) {
        var t = [];
        for (var s in e)e.hasOwnProperty(s) && t.push.apply(t, e[s]);
        return t
    }, scheduler.attachEvent("onScaleAdd", function (e, t) {
        if (!scheduler._table_view || "month" == scheduler._mode) {
            var s = t.getDay(), r = t.valueOf(), i = this._mode, a = scheduler._marked_timespans, n = [];
            if (this._props && this._props[i]) {
                var d = this._props[i], l = d.options, o = scheduler._get_unit_index(d, t), h = l[o];
                if (t = scheduler.date.date_part(new Date(this._date)), s = t.getDay(), r = t.valueOf(), a[i] && a[i][h.key]) {
                    var _ = a[i][h.key], c = scheduler._get_types_to_render(_[s], _[r]);
                    n.push.apply(n, scheduler._get_configs_to_render(c))
                }
            }
            var u = a.global, f = u[r] || u[s];
            n.push.apply(n, scheduler._get_configs_to_render(f));
            for (var v = 0; v < n.length; v++)scheduler._render_marked_timespan(n[v], e, t)
        }
    }), scheduler.dblclick_dhx_marked_timespan = function (e, t) {
        scheduler.config.dblclick_create || scheduler.callEvent("onScaleDblClick", [scheduler.getActionData(e).date, t, e]), scheduler.addEventNow(scheduler.getActionData(e).date, null, e)
    }
}, scheduler._temp_limit_scope();
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_limit.js.map