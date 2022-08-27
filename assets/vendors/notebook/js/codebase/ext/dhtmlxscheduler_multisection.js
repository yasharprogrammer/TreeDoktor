/*
 dhtmlxScheduler v.4.1.0 Stardard

 This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

 (c) Dinamenta, UAB.
 */
scheduler.config.multisection = !0, scheduler.config.section_delemiter = ",", scheduler.attachEvent("onSchedulerReady", function () {
    var e = scheduler._update_unit_section;
    scheduler._update_unit_section = function (t) {
        return scheduler._update_sections(t, e)
    };
    var t = scheduler._update_timeline_section;
    scheduler._update_timeline_section = function (e) {
        return scheduler._update_sections(e, t)
    }, scheduler.isMultisectionEvent = function (e) {
        if (e && this._get_multisection_view()) {
            var t = this._get_event_sections(e);
            return t.length > 1
        }
        return!1
    }, scheduler._get_event_sections = function (e) {
        var t = this._get_section_property(), s = e[t] || "";
        return this._parse_event_sections(s)
    }, scheduler._parse_event_sections = function (e) {
        return e instanceof Array ? e : e.toString().split(scheduler.config.section_delemiter)
    }, scheduler._register_copies_array = function (e) {
        for (var t = 0; t < e.length; t++)this._register_copy(e[t])
    }, scheduler._register_copy = function (e) {
        this._multisection_copies[e.id] || (this._multisection_copies[e.id] = {});
        var t = e[this._get_section_property()], s = this._multisection_copies[e.id];
        s[t] || (s[t] = e)
    }, scheduler._get_copied_event = function (e, t) {
        if (!this._multisection_copies[e])return null;
        if (this._multisection_copies[e][t])return this._multisection_copies[e][t];
        var s = this._multisection_copies[e];
        if (scheduler._drag_event && scheduler._drag_event._orig_section && s[scheduler._drag_event._orig_section])return s[scheduler._drag_event._orig_section];
        var r = 1 / 0, a = null;
        for (var i in s)s[i]._sorder < r && (a = s[i], r = s[i]._sorder);
        return a
    }, scheduler._clear_copied_events = function () {
        this._multisection_copies = {}
    }, scheduler._clear_copied_events(), scheduler._split_events = function (e) {
        var t = [], s = this._get_multisection_view(), r = this._get_section_property();
        if (s)for (var a = 0; a < e.length; a++) {
            var i = this._get_event_sections(e[a]);
            if (i.length > 1) {
                for (var n = 0; n < i.length; n++)if ("undefined" != typeof s.order[i[n]]) {
                    var d = this._lame_copy({}, e[a]);
                    d[r] = i[n], t.push(d)
                }
            } else t.push(e[a])
        } else t = e;
        return t
    }, scheduler._get_multisection_view = function () {
        return this.config.multisection ? scheduler._get_section_view() : !1
    };
    var s = scheduler.get_visible_events;
    scheduler.get_visible_events = function () {
        this._clear_copied_events();
        {
            var e = s.apply(this, arguments);
            this._get_multisection_view()
        }
        return this._get_multisection_view() && (e = this._split_events(e), this._register_copies_array(e)), e
    }, scheduler._rendered_events = {};
    var r = scheduler.render_view_data;
    scheduler.render_view_data = function (e, t) {
        return this._get_multisection_view() && e && (e = this._split_events(e), this._restore_render_flags(e)), r.apply(this, [e, t])
    }, scheduler._restore_render_flags = function (e) {
        for (var t = this._get_section_property(), s = 0; s < e.length; s++) {
            var r = e[s], a = scheduler._get_copied_event(r.id, r[t]);
            if (a)for (var i in a)0 === i.indexOf("_") && (r[i] = a[i])
        }
    }, scheduler._update_sections = function (e, t) {
        var s = e.view, r = e.event, a = e.pos;
        if (scheduler.isMultisectionEvent(r)) {
            if (scheduler._drag_event._orig_section || (scheduler._drag_event._orig_section = a.section), scheduler._drag_event._orig_section != a.section) {
                var i = s.order[a.section] - s.order[scheduler._drag_event._orig_section];
                if (i) {
                    for (var n = this._get_event_sections(r), d = [], l = !0, o = 0; o < n.length; o++) {
                        var _ = scheduler._shift_sections(s, n[o], i);
                        if (null === _) {
                            d = n, l = !1;
                            break
                        }
                        d[o] = _
                    }
                    l && (scheduler._drag_event._orig_section = a.section), r[scheduler._get_section_property()] = d.join(",")
                }
            }
        } else t.apply(scheduler, [e])
    }, scheduler._shift_sections = function (e, t, s) {
        for (var r in e.order)if (e.order[r] - e.order[t] == s)return r;
        return null
    };
    var a = scheduler._get_blocked_zones;
    scheduler._get_blocked_zones = function (e, t, s, r, i) {
        if (t && this.config.multisection) {
            t = this._parse_event_sections(t);
            for (var n = [], d = 0; d < t.length; d++)n = n.concat(a.apply(this, [e, t[d], s, r, i]));
            return n
        }
        return a.apply(this, arguments)
    };
    var i = scheduler._check_sections_collision;
    scheduler._check_sections_collision = function (e, t) {
        if (this.config.multisection && this._get_section_view()) {
            e = this._split_events([e]), t = this._split_events([t]);
            for (var s = !1, r = 0, a = e.length; a > r && !s; r++)for (var n = 0, d = t.length; d > n; n++)if (i.apply(this, [e[r], t[n]])) {
                s = !0;
                break
            }
            return s
        }
        return i.apply(this, arguments)
    }
});
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_multisection.js.map