/*
 dhtmlxScheduler v.4.1.0 Stardard

 This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

 (c) Dinamenta, UAB.
 */
!function () {
    scheduler.config.all_timed = "short";
    var e = function (e) {
        return!((e.end_date - e.start_date) / 36e5 >= 24)
    };
    scheduler._safe_copy = function (e) {
        var t = null, s = null;
        return e.event_pid && (t = scheduler.getEvent(e.event_pid)), t && t.isPrototypeOf(e) ? (s = scheduler._copy_event(e), delete s.event_length, delete s.event_pid, delete s.rec_pattern, delete s.rec_type) : s = scheduler._lame_clone(e), s
    };
    var t = scheduler._pre_render_events_line;
    scheduler._pre_render_events_line = function (s, i) {
        function a(e) {
            var t = n(e.start_date);
            return+e.end_date > +t
        }

        function n(e) {
            var t = scheduler.date.add(e, 1, "day");
            return t = scheduler.date.date_part(t)
        }

        function r(e, t) {
            var s = scheduler.date.date_part(new Date(e));
            return s.setHours(t), s
        }

        if (!this.config.all_timed)return t.call(this, s, i);
        for (var d = 0; d < s.length; d++) {
            var o = s[d];
            if (!o._timed)if ("short" != this.config.all_timed || e(o)) {
                var l = this._safe_copy(o);
                l.start_date = new Date(l.start_date), a(o) ? (l.end_date = n(l.start_date), 24 != this.config.last_hour && (l.end_date = r(l.start_date, this.config.last_hour))) : l.end_date = new Date(o.end_date);
                var h = !1;
                l.start_date < this._max_date && l.end_date > this._min_date && l.start_date < l.end_date && (s[d] = l, h = !0);
                var _ = this._safe_copy(o);
                if (_.end_date = new Date(_.end_date), _.start_date = _.start_date < this._min_date ? r(this._min_date, this.config.first_hour) : r(n(o.start_date), this.config.first_hour), _.start_date < this._max_date && _.start_date < _.end_date) {
                    if (!h) {
                        s[d--] = _;
                        continue
                    }
                    s.splice(d + 1, 0, _)
                }
            } else s.splice(d--, 1)
        }
        var c = "move" == this._drag_mode ? !1 : i;
        return t.call(this, s, c)
    };
    var s = scheduler.get_visible_events;
    scheduler.get_visible_events = function (e) {
        return this.config.all_timed && this.config.multi_day ? s.call(this, !1) : s.call(this, e)
    }, scheduler.attachEvent("onBeforeViewChange", function (e, t, s) {
        return scheduler._allow_dnd = "day" == s || "week" == s, !0
    }), scheduler._is_main_area_event = function (t) {
        return!!(t._timed || this.config.all_timed === !0 || "short" == this.config.all_timed && e(t))
    };
    var i = scheduler.updateEvent;
    scheduler.updateEvent = function (e) {
        var t, s = scheduler.config.all_timed && !(scheduler.isOneDayEvent(scheduler._events[e]) || scheduler.getState().drag_id);
        s && (t = scheduler.config.update_render, scheduler.config.update_render = !0), i.apply(scheduler, arguments), s && (scheduler.config.update_render = t)
    }
}();
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_all_timed.js.map