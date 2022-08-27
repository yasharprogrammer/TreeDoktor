/*
 dhtmlxScheduler v.4.1.0 Stardard

 This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

 (c) Dinamenta, UAB.
 */
scheduler.config.occurrence_timestamp_in_utc = !1, scheduler.config.recurring_workdays = [1, 2, 3, 4, 5], scheduler.form_blocks.recurring = {render: function () {
    return scheduler.__recurring_template
}, _ds: {}, _init_set_value: function (e, t, r) {
    function s(e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            "checkbox" == r.type || "radio" == r.type ? (h[r.name] || (h[r.name] = []), h[r.name].push(r)) : h[r.name] = r
        }
    }

    function a(e) {
        for (var t = h[e], r = 0; r < t.length; r++)if (t[r].checked)return t[r].value
    }

    function n() {
        v("dhx_repeat_day").style.display = "none", v("dhx_repeat_week").style.display = "none", v("dhx_repeat_month").style.display = "none", v("dhx_repeat_year").style.display = "none", v("dhx_repeat_" + this.value).style.display = "block"
    }

    function i(e) {
        var t = [a("repeat")];
        for (f[t[0]](t, e); t.length < 5;)t.push("");
        var r = "";
        if (h.end[0].checked)e.end = new Date(9999, 1, 1), r = "no"; else if (h.end[2].checked)e.end = o(h.date_of_end.value); else {
            scheduler.transpose_type(t.join("_")), r = Math.max(1, h.occurences_count.value);
            var s = "week" == t[0] && t[4] && -1 == t[4].toString().indexOf(scheduler.config.start_on_monday ? 1 : 0) ? 1 : 0;
            e.end = scheduler.date.add(new Date(e.start), r + s, t.join("_"))
        }
        return t.join("_") + "#" + r
    }

    function d(e, t) {
        var r = e.split("#");
        e = r[0].split("_"), g[e[0]](e, t);
        var s = h.repeat[{day: 0, week: 1, month: 2, year: 3}[e[0]]];
        switch (r[1]) {
            case"no":
                h.end[0].checked = !0;
                break;
            case"":
                h.end[2].checked = !0;
                var a = t.end;
                scheduler.config.include_end_by && (a = scheduler.date.add(a, -1, "day")), h.date_of_end.value = _(a);
                break;
            default:
                h.end[1].checked = !0, h.occurences_count.value = r[1]
        }
        s.checked = !0, s.onclick()
    }

    scheduler.form_blocks.recurring._ds = {start: r.start_date, end: r._end_date};
    var l = scheduler.date.str_to_date(scheduler.config.repeat_date), o = function (e) {
        var t = l(e);
        return scheduler.config.include_end_by && (t = scheduler.date.add(t, 1, "day")), t
    }, _ = scheduler.date.date_to_str(scheduler.config.repeat_date), c = e.getElementsByTagName("FORM")[0], h = [];
    if (s(c.getElementsByTagName("INPUT")), s(c.getElementsByTagName("SELECT")), !scheduler.config.repeat_date_of_end) {
        var u = scheduler.date.date_to_str(scheduler.config.repeat_date);
        scheduler.config.repeat_date_of_end = u(scheduler.date.add(scheduler._currentDate(), 30, "day"))
    }
    h.date_of_end.value = scheduler.config.repeat_date_of_end;
    var v = function (e) {
        return document.getElementById(e)
    };
    scheduler.form_blocks.recurring._get_repeat_code = i;
    var f = {month: function (e, t) {
        "d" == a("month_type") ? (e.push(Math.max(1, h.month_count.value)), t.start.setDate(h.month_day.value)) : (e.push(Math.max(1, h.month_count2.value)), e.push(h.month_day2.value), e.push(Math.max(1, h.month_week2.value)), scheduler.config.repeat_precise || t.start.setDate(1)), t._start = !0
    }, week: function (e, t) {
        e.push(Math.max(1, h.week_count.value)), e.push(""), e.push("");
        for (var r = [], s = h.week_day, a = t.start.getDay(), n = !1, i = 0; i < s.length; i++)s[i].checked && (r.push(s[i].value), n = n || s[i].value == a);
        r.length || (r.push(a), n = !0), r.sort(), scheduler.config.repeat_precise ? n || (scheduler.transpose_day_week(t.start, r, 1, 7), t._start = !0) : (t.start = scheduler.date.week_start(t.start), t._start = !0), e.push(r.join(","))
    }, day: function (e) {
        "d" == a("day_type") ? e.push(Math.max(1, h.day_count.value)) : (e.push("week"), e.push(1), e.push(""), e.push(""), e.push(scheduler.config.recurring_workdays.join(",")), e.splice(0, 1))
    }, year: function (e, t) {
        "d" == a("year_type") ? (e.push("1"), t.start.setMonth(0), t.start.setDate(h.year_day.value), t.start.setMonth(h.year_month.value)) : (e.push("1"), e.push(h.year_day2.value), e.push(h.year_week2.value), t.start.setDate(1), t.start.setMonth(h.year_month2.value)), t._start = !0
    }}, g = {week: function (e) {
        h.week_count.value = e[1];
        for (var t = h.week_day, r = e[4].split(","), s = {}, a = 0; a < r.length; a++)s[r[a]] = !0;
        for (var a = 0; a < t.length; a++)t[a].checked = !!s[t[a].value]
    }, month: function (e, t) {
        "" === e[2] ? (h.month_type[0].checked = !0, h.month_count.value = e[1], h.month_day.value = t.start.getDate()) : (h.month_type[1].checked = !0, h.month_count2.value = e[1], h.month_week2.value = e[3], h.month_day2.value = e[2])
    }, day: function (e) {
        h.day_type[0].checked = !0, h.day_count.value = e[1]
    }, year: function (e, t) {
        "" === e[2] ? (h.year_type[0].checked = !0, h.year_day.value = t.start.getDate(), h.year_month.value = t.start.getMonth()) : (h.year_type[1].checked = !0, h.year_week2.value = e[3], h.year_day2.value = e[2], h.year_month2.value = t.start.getMonth())
    }};
    scheduler.form_blocks.recurring._set_repeat_code = d;
    for (var p = 0; p < c.elements.length; p++) {
        var m = c.elements[p];
        switch (m.name) {
            case"repeat":
                m.onclick = n
        }
    }
    scheduler._lightbox._rec_init_done = !0
}, set_value: function (e, t, r) {
    var s = scheduler.form_blocks.recurring;
    scheduler._lightbox._rec_init_done || s._init_set_value(e, t, r), e.open = !r.rec_type, e.blocked = this._is_modified_occurence(r) ? !0 : !1;
    var a = s._ds;
    a.start = r.start_date, a.end = r._end_date, s.button_click(0, e.previousSibling.firstChild.firstChild, e, e), t && s._set_repeat_code(t, a)
}, get_value: function (e, t) {
    if (e.open) {
        var r = scheduler.form_blocks.recurring._ds, s = {};
        this.formSection("time").getValue(s), r.start = s.start_date, t.rec_type = scheduler.form_blocks.recurring._get_repeat_code(r), r._start ? (t.start_date = new Date(r.start), t._start_date = new Date(r.start), r._start = !1) : t._start_date = null, t._end_date = r.end, t.rec_pattern = t.rec_type.split("#")[0]
    } else t.rec_type = t.rec_pattern = "", t._end_date = t.end_date;
    return t.rec_type
}, focus: function () {
}, button_click: function (e, t, r, s) {
    s.open || s.blocked ? (s.style.height = "0px", t.style.backgroundPosition = "-5px 20px", t.nextSibling.innerHTML = scheduler.locale.labels.button_recurring) : (s.style.height = "115px", t.style.backgroundPosition = "-5px 0px", t.nextSibling.innerHTML = scheduler.locale.labels.button_recurring_open), s.open = !s.open, scheduler.setLightboxSize()
}}, scheduler._rec_markers = {}, scheduler._rec_markers_pull = {}, scheduler._add_rec_marker = function (e, t) {
    e._pid_time = t, this._rec_markers[e.id] = e, this._rec_markers_pull[e.event_pid] || (this._rec_markers_pull[e.event_pid] = {}), this._rec_markers_pull[e.event_pid][t] = e
}, scheduler._get_rec_marker = function (e, t) {
    var r = this._rec_markers_pull[t];
    return r ? r[e] : null
}, scheduler._get_rec_markers = function (e) {
    return this._rec_markers_pull[e] || []
}, scheduler._rec_temp = [], function () {
    var e = scheduler.addEvent;
    scheduler.addEvent = function () {
        var t = e.apply(this, arguments);
        if (t) {
            var r = scheduler.getEvent(t);
            this._is_modified_occurence(r) && scheduler._add_rec_marker(r, 1e3 * r.event_length), r.rec_type && (r.rec_pattern = r.rec_type.split("#")[0])
        }
        return t
    }
}(), scheduler.attachEvent("onEventIdChange", function (e, t) {
    if (!this._ignore_call) {
        this._ignore_call = !0, scheduler._rec_markers[e] && (scheduler._rec_markers[t] = scheduler._rec_markers[e], delete scheduler._rec_markers[e]);
        for (var r = 0; r < this._rec_temp.length; r++) {
            var s = this._rec_temp[r];
            s.event_pid == e && (s.event_pid = t, this.changeEventId(s.id, t + "#" + s.id.split("#")[1]))
        }
        delete this._ignore_call
    }
}), scheduler.attachEvent("onConfirmedBeforeEventDelete", function (e) {
    var t = this.getEvent(e);
    if (this._is_virtual_event(e) || this._is_modified_occurence(t) && t.rec_type && "none" != t.rec_type) {
        e = e.split("#");
        var r = this.uid(), s = e[1] ? e[1] : t._pid_time / 1e3, a = this._copy_event(t);
        a.id = r, a.event_pid = t.event_pid || e[0];
        var n = s;
        a.event_length = n, a.rec_type = a.rec_pattern = "none", this.addEvent(a), this._add_rec_marker(a, 1e3 * n)
    } else {
        t.rec_type && this._lightbox_id && this._roll_back_dates(t);
        var i = this._get_rec_markers(e);
        for (var d in i)i.hasOwnProperty(d) && (e = i[d].id, this.getEvent(e) && this.deleteEvent(e, !0))
    }
    return!0
}), scheduler.attachEvent("onEventDeleted", function (e, t) {
    !this._is_virtual_event(e) && this._is_modified_occurence(t) && (scheduler._events[e] || (t.rec_type = t.rec_pattern = "none", this.setEvent(e, t)))
}), scheduler.attachEvent("onEventChanged", function (e) {
    if (this._loading)return!0;
    var t = this.getEvent(e);
    if (this._is_virtual_event(e)) {
        var e = e.split("#"), r = this.uid();
        this._not_render = !0;
        var s = this._copy_event(t);
        s.id = r, s.event_pid = e[0];
        var a = e[1];
        s.event_length = a, s.rec_type = s.rec_pattern = "", this._add_rec_marker(s, 1e3 * a), this.addEvent(s), this._not_render = !1
    } else {
        t.rec_type && this._lightbox_id && this._roll_back_dates(t);
        var n = this._get_rec_markers(e);
        for (var i in n)n.hasOwnProperty(i) && (delete this._rec_markers[n[i].id], this.deleteEvent(n[i].id, !0));
        delete this._rec_markers_pull[e];
        for (var d = !1, l = 0; l < this._rendered.length; l++)this._rendered[l].getAttribute("event_id") == e && (d = !0);
        d || (this._select_id = null)
    }
    return!0
}), scheduler.attachEvent("onEventAdded", function (e) {
    if (!this._loading) {
        var t = this.getEvent(e);
        t.rec_type && !t.event_length && this._roll_back_dates(t)
    }
    return!0
}), scheduler.attachEvent("onEventSave", function (e, t) {
    var r = this.getEvent(e);
    return r.rec_type || !t.rec_type || this._is_virtual_event(e) || (this._select_id = null), !0
}), scheduler.attachEvent("onEventCreated", function (e) {
    var t = this.getEvent(e);
    return t.rec_type || (t.rec_type = t.rec_pattern = t.event_length = t.event_pid = ""), !0
}), scheduler.attachEvent("onEventCancel", function (e) {
    var t = this.getEvent(e);
    t.rec_type && (this._roll_back_dates(t), this.render_view_data())
}), scheduler._roll_back_dates = function (e) {
    e.event_length = (e.end_date.valueOf() - e.start_date.valueOf()) / 1e3, e.end_date = e._end_date, e._start_date && (e.start_date.setMonth(0), e.start_date.setDate(e._start_date.getDate()), e.start_date.setMonth(e._start_date.getMonth()), e.start_date.setFullYear(e._start_date.getFullYear()))
}, scheduler._is_virtual_event = function (e) {
    return-1 != e.toString().indexOf("#")
}, scheduler._is_modified_occurence = function (e) {
    return e.event_pid && "0" != e.event_pid
}, scheduler._validId = function (e) {
    return!this._is_virtual_event(e)
}, scheduler.showLightbox_rec = scheduler.showLightbox, scheduler.showLightbox = function (e) {
    var t = this.locale, r = scheduler.config.lightbox_recurring, s = this.getEvent(e), a = s.event_pid, n = this._is_virtual_event(e);
    n && (a = e.split("#")[0]);
    var i = function (e) {
        var t = scheduler.getEvent(e);
        return t._end_date = t.end_date, t.end_date = new Date(t.start_date.valueOf() + 1e3 * t.event_length), scheduler.showLightbox_rec(e)
    };
    if ((a || 1 * a === 0) && s.rec_type)return i(e);
    if (!a || "0" === a || !t.labels.confirm_recurring || "instance" == r || "series" == r && !n)return this.showLightbox_rec(e);
    if ("ask" == r) {
        var d = this;
        dhtmlx.modalbox({text: t.labels.confirm_recurring, title: t.labels.title_confirm_recurring, width: "500px", position: "middle", buttons: [t.labels.button_edit_series, t.labels.button_edit_occurrence, t.labels.icon_cancel], callback: function (t) {
            switch (+t) {
                case 0:
                    return i(a);
                case 1:
                    return d.showLightbox_rec(e);
                case 2:
                    return
            }
        }})
    } else i(a)
}, scheduler.get_visible_events_rec = scheduler.get_visible_events, scheduler.get_visible_events = function (e) {
    for (var t = 0; t < this._rec_temp.length; t++)delete this._events[this._rec_temp[t].id];
    this._rec_temp = [];
    for (var r = this.get_visible_events_rec(e), s = [], t = 0; t < r.length; t++)r[t].rec_type ? "none" != r[t].rec_pattern && this.repeat_date(r[t], s) : s.push(r[t]);
    return s
}, function () {
    var e = scheduler.isOneDayEvent;
    scheduler.isOneDayEvent = function (t) {
        return t.rec_type ? !0 : e.call(this, t)
    };
    var t = scheduler.updateEvent;
    scheduler.updateEvent = function (e) {
        var r = scheduler.getEvent(e);
        r && r.rec_type && (r.rec_pattern = (r.rec_type || "").split("#")[0]), r && r.rec_type && !this._is_virtual_event(e) ? scheduler.update_view() : t.call(this, e)
    }
}(), scheduler.transponse_size = {day: 1, week: 7, month: 1, year: 12}, scheduler.date.day_week = function (e, t, r) {
    e.setDate(1), r = 7 * (r - 1);
    var s = e.getDay(), a = 1 * t + r - s + 1;
    e.setDate(r >= a ? a + 7 : a)
}, scheduler.transpose_day_week = function (e, t, r, s, a) {
    for (var n = (e.getDay() || (scheduler.config.start_on_monday ? 7 : 0)) - r, i = 0; i < t.length; i++)if (t[i] > n)return e.setDate(e.getDate() + 1 * t[i] - n - (s ? r : a));
    this.transpose_day_week(e, t, r + s, null, r)
}, scheduler.transpose_type = function (e) {
    var t = "transpose_" + e;
    if (!this.date[t]) {
        var r = e.split("_"), s = 864e5, a = "add_" + e, n = this.transponse_size[r[0]] * r[1];
        if ("day" == r[0] || "week" == r[0]) {
            var i = null;
            if (r[4] && (i = r[4].split(","), scheduler.config.start_on_monday)) {
                for (var d = 0; d < i.length; d++)i[d] = 1 * i[d] || 7;
                i.sort()
            }
            this.date[t] = function (e, t) {
                var r = Math.floor((t.valueOf() - e.valueOf()) / (s * n));
                r > 0 && e.setDate(e.getDate() + r * n), i && scheduler.transpose_day_week(e, i, 1, n)
            }, this.date[a] = function (e, t) {
                var r = new Date(e.valueOf());
                if (i)for (var s = 0; t > s; s++)scheduler.transpose_day_week(r, i, 0, n); else r.setDate(r.getDate() + t * n);
                return r
            }
        } else("month" == r[0] || "year" == r[0]) && (this.date[t] = function (e, t) {
            var s = Math.ceil((12 * t.getFullYear() + 1 * t.getMonth() - (12 * e.getFullYear() + 1 * e.getMonth())) / n);
            s >= 0 && e.setMonth(e.getMonth() + s * n), r[3] && scheduler.date.day_week(e, r[2], r[3])
        }, this.date[a] = function (e, t) {
            var s = new Date(e.valueOf());
            return s.setMonth(s.getMonth() + t * n), r[3] && scheduler.date.day_week(s, r[2], r[3]), s
        })
    }
}, scheduler.repeat_date = function (e, t, r, s, a) {
    s = s || this._min_date, a = a || this._max_date;
    var n = new Date(e.start_date.valueOf());
    for (!e.rec_pattern && e.rec_type && (e.rec_pattern = e.rec_type.split("#")[0]), this.transpose_type(e.rec_pattern), scheduler.date["transpose_" + e.rec_pattern](n, s); n < e.start_date || scheduler._fix_daylight_saving_date(n, s, e, n, new Date(n.valueOf() + 1e3 * e.event_length)).valueOf() <= s.valueOf() || n.valueOf() + 1e3 * e.event_length <= s.valueOf();)n = this.date.add(n, 1, e.rec_pattern);
    for (; a > n && n < e.end_date;) {
        var i = scheduler.config.occurrence_timestamp_in_utc ? Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds()) : n.valueOf(), d = this._get_rec_marker(i, e.id);
        if (d)r && t.push(d); else {
            var l = new Date(n.valueOf() + 1e3 * e.event_length), o = this._copy_event(e);
            if (o.text = e.text, o.start_date = n, o.event_pid = e.id, o.id = e.id + "#" + Math.ceil(i / 1e3), o.end_date = l, o.end_date = scheduler._fix_daylight_saving_date(o.start_date, o.end_date, e, n, o.end_date), o._timed = this.isOneDayEvent(o), !o._timed && !this._table_view && !this.config.multi_day)return;
            t.push(o), r || (this._events[o.id] = o, this._rec_temp.push(o))
        }
        n = this.date.add(n, 1, e.rec_pattern)
    }
}, scheduler._fix_daylight_saving_date = function (e, t, r, s, a) {
    var n = e.getTimezoneOffset() - t.getTimezoneOffset();
    return new Date(n ? n > 0 ? s.valueOf() + 1e3 * r.event_length - 60 * n * 1e3 : t.valueOf() - 60 * n * 1e3 : a.valueOf())
}, scheduler.getRecDates = function (e, t) {
    var r = "object" == typeof e ? e : scheduler.getEvent(e), s = 0, a = [];
    t = t || 100;
    var n = new Date(r.start_date.valueOf()), i = new Date(n.valueOf());
    if (!r.rec_type)return[
        {start_date: r.start_date, end_date: r.end_date}
    ];
    if ("none" == r.rec_type)return[];
    for (this.transpose_type(r.rec_pattern), scheduler.date["transpose_" + r.rec_pattern](n, i); n < r.start_date || n.valueOf() + 1e3 * r.event_length <= i.valueOf();)n = this.date.add(n, 1, r.rec_pattern);
    for (; n < r.end_date;) {
        var d = this._get_rec_marker(n.valueOf(), r.id), l = !0;
        if (d)"none" == d.rec_type ? l = !1 : a.push({start_date: d.start_date, end_date: d.end_date}); else {
            var o = new Date(n), _ = new Date(n.valueOf() + 1e3 * r.event_length);
            _ = scheduler._fix_daylight_saving_date(o, _, r, n, _), a.push({start_date: o, end_date: _})
        }
        if (n = this.date.add(n, 1, r.rec_pattern), l && (s++, s == t))break
    }
    return a
}, scheduler.getEvents = function (e, t) {
    var r = [];
    for (var s in this._events) {
        var a = this._events[s];
        if (a && a.start_date < t && a.end_date > e)if (a.rec_pattern) {
            if ("none" == a.rec_pattern)continue;
            var n = [];
            this.repeat_date(a, n, !0, e, t);
            for (var i = 0; i < n.length; i++)!n[i].rec_pattern && n[i].start_date < t && n[i].end_date > e && !this._rec_markers[n[i].id] && r.push(n[i])
        } else this._is_virtual_event(a.id) || r.push(a)
    }
    return r
}, scheduler.config.repeat_date = "%m.%d.%Y", scheduler.config.lightbox.sections = [
    {name: "description", height: 130, map_to: "text", type: "textarea", focus: !0},
    {name: "recurring", type: "recurring", map_to: "rec_type", button: "recurring"},
    {name: "time", height: 72, type: "time", map_to: "auto"}
], scheduler._copy_dummy = function () {
    var e = new Date(this.start_date), t = new Date(this.end_date);
    this.start_date = e, this.end_date = t, this.event_length = this.event_pid = this.rec_pattern = this.rec_type = null
}, scheduler.config.include_end_by = !1, scheduler.config.lightbox_recurring = "ask", scheduler.attachEvent("onClearAll", function () {
    scheduler._rec_markers = {}, scheduler._rec_markers_pull = {}, scheduler._rec_temp = []
}), scheduler.__recurring_template = '<div class="dhx_form_repeat"> <form> <div class="dhx_repeat_left"> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="day" />Daily</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="week"/>Weekly</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="month" checked />Monthly</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="year" />Yearly</label> </div> <div class="dhx_repeat_divider"></div> <div class="dhx_repeat_center"> <div style="display:none;" id="dhx_repeat_day"> <label><input class="dhx_repeat_radio" type="radio" name="day_type" value="d"/>Every</label><input class="dhx_repeat_text" type="text" name="day_count" value="1" />day<br /> <label><input class="dhx_repeat_radio" type="radio" name="day_type" checked value="w"/>Every workday</label> </div> <div style="display:none;" id="dhx_repeat_week"> Repeat every<input class="dhx_repeat_text" type="text" name="week_count" value="1" />week next days:<br /> <table class="dhx_repeat_days"> <tr> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="1" />Monday</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="4" />Thursday</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="2" />Tuesday</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="5" />Friday</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="3" />Wednesday</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="6" />Saturday</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="0" />Sunday</label><br /><br /> </td> </tr> </table> </div> <div id="dhx_repeat_month"> <label><input class="dhx_repeat_radio" type="radio" name="month_type" value="d"/>Repeat</label><input class="dhx_repeat_text" type="text" name="month_day" value="1" />day every<input class="dhx_repeat_text" type="text" name="month_count" value="1" />month<br /> <label><input class="dhx_repeat_radio" type="radio" name="month_type" checked value="w"/>On</label><input class="dhx_repeat_text" type="text" name="month_week2" value="1" /><select name="month_day2"><option value="1" selected >Monday<option value="2">Tuesday<option value="3">Wednesday<option value="4">Thursday<option value="5">Friday<option value="6">Saturday<option value="0">Sunday</select>every<input class="dhx_repeat_text" type="text" name="month_count2" value="1" />month<br /> </div> <div style="display:none;" id="dhx_repeat_year"> <label><input class="dhx_repeat_radio" type="radio" name="year_type" value="d"/>Every</label><input class="dhx_repeat_text" type="text" name="year_day" value="1" />day<select name="year_month"><option value="0" selected >January<option value="1">February<option value="2">March<option value="3">April<option value="4">May<option value="5">June<option value="6">July<option value="7">August<option value="8">September<option value="9">October<option value="10">November<option value="11">December</select>month<br /> <label><input class="dhx_repeat_radio" type="radio" name="year_type" checked value="w"/>On</label><input class="dhx_repeat_text" type="text" name="year_week2" value="1" /><select name="year_day2"><option value="1" selected >Monday<option value="2">Tuesday<option value="3">Wednesday<option value="4">Thursday<option value="5">Friday<option value="6">Saturday<option value="7">Sunday</select>of<select name="year_month2"><option value="0" selected >January<option value="1">February<option value="2">March<option value="3">April<option value="4">May<option value="5">June<option value="6">July<option value="7">August<option value="8">September<option value="9">October<option value="10">November<option value="11">December</select><br /> </div> </div> <div class="dhx_repeat_divider"></div> <div class="dhx_repeat_right"> <label><input class="dhx_repeat_radio" type="radio" name="end" checked/>No end date</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="end" />After</label><input class="dhx_repeat_text" type="text" name="occurences_count" value="1" />occurrences<br /> <label><input class="dhx_repeat_radio" type="radio" name="end" />End by</label><input class="dhx_repeat_date" type="text" name="date_of_end" value="' + scheduler.config.repeat_date_of_end + '" /><br /> </div> </form> </div> <div style="clear:both"> </div>';

//# sourceMappingURL=../sources/ext/dhtmlxscheduler_recurring.js.map