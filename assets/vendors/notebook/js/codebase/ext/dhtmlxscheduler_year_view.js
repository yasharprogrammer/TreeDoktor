/*
 dhtmlxScheduler v.4.1.0 Stardard

 This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

 (c) Dinamenta, UAB.
 */
scheduler.config.year_x = 4, scheduler.config.year_y = 3, scheduler.xy.year_top = 0, scheduler.templates.year_date = function (e) {
    return scheduler.date.date_to_str(scheduler.locale.labels.year_tab + " %Y")(e)
}, scheduler.templates.year_month = scheduler.date.date_to_str("%F"), scheduler.templates.year_scale_date = scheduler.date.date_to_str("%D"), scheduler.templates.year_tooltip = function (e, t, r) {
    return r.text
}, function () {
    var e = function () {
        return"year" == scheduler._mode
    };
    scheduler.dblclick_dhx_month_head = function (t) {
        if (e()) {
            var r = t.target || t.srcElement;
            if (-1 != r.parentNode.className.indexOf("dhx_before") || -1 != r.parentNode.className.indexOf("dhx_after"))return!1;
            var s = this.templates.xml_date(r.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("date"));
            s.setDate(parseInt(r.innerHTML, 10));
            var a = this.date.add(s, 1, "day");
            !this.config.readonly && this.config.dblclick_create && this.addEventNow(s.valueOf(), a.valueOf(), t)
        }
    };
    var t = scheduler.changeEventId;
    scheduler.changeEventId = function () {
        t.apply(this, arguments), e() && this.year_view(!0)
    };
    var r = scheduler.render_data, s = scheduler.date.date_to_str("%Y/%m/%d"), a = scheduler.date.str_to_date("%Y/%m/%d");
    scheduler.render_data = function (t) {
        if (!e())return r.apply(this, arguments);
        for (var s = 0; s < t.length; s++)this._year_render_event(t[s])
    };
    var d = scheduler.clear_view;
    scheduler.clear_view = function () {
        if (!e())return d.apply(this, arguments);
        var t = scheduler._year_marked_cells, r = null;
        for (var s in t)t.hasOwnProperty(s) && (r = t[s], r.className = "dhx_month_head", r.setAttribute("date", ""));
        scheduler._year_marked_cells = {}
    }, scheduler._hideToolTip = function () {
        this._tooltip && (this._tooltip.style.display = "none", this._tooltip.date = new Date(9999, 1, 1))
    }, scheduler._showToolTip = function (e, t, r, s) {
        if (this._tooltip) {
            if (this._tooltip.date.valueOf() == e.valueOf())return;
            this._tooltip.innerHTML = ""
        } else {
            var a = this._tooltip = document.createElement("DIV");
            a.className = "dhx_year_tooltip", document.body.appendChild(a), a.onclick = scheduler._click.dhx_cal_data
        }
        for (var d = this.getEvents(e, this.date.add(e, 1, "day")), n = "", i = 0; i < d.length; i++) {
            var l = d[i];
            if (this.filter_event(l.id, l)) {
                var _ = l.color ? "background:" + l.color + ";" : "", o = l.textColor ? "color:" + l.textColor + ";" : "";
                n += "<div class='dhx_tooltip_line' style='" + _ + o + "' event_id='" + d[i].id + "'>", n += "<div class='dhx_tooltip_date' style='" + _ + o + "'>" + (d[i]._timed ? this.templates.event_date(d[i].start_date) : "") + "</div>", n += "<div class='dhx_event_icon icon_details'>&nbsp;</div>", n += this.templates.year_tooltip(d[i].start_date, d[i].end_date, d[i]) + "</div>"
            }
        }
        this._tooltip.style.display = "", this._tooltip.style.top = "0px", this._tooltip.style.left = document.body.offsetWidth - t.left - this._tooltip.offsetWidth < 0 ? t.left - this._tooltip.offsetWidth + "px" : t.left + s.offsetWidth + "px", this._tooltip.date = e, this._tooltip.innerHTML = n, this._tooltip.style.top = document.body.offsetHeight - t.top - this._tooltip.offsetHeight < 0 ? t.top - this._tooltip.offsetHeight + s.offsetHeight + "px" : t.top + "px"
    }, scheduler._year_view_tooltip_handler = function (t) {
        if (e()) {
            var t = t || event, r = t.target || t.srcElement;
            "a" == r.tagName.toLowerCase() && (r = r.parentNode), -1 != (r.className || "").indexOf("dhx_year_event") ? scheduler._showToolTip(a(r.getAttribute("date")), getOffset(r), t, r) : scheduler._hideToolTip()
        }
    }, scheduler._init_year_tooltip = function () {
        scheduler._detachDomEvent(scheduler._els.dhx_cal_data[0], "mouseover", scheduler._year_view_tooltip_handler), dhtmlxEvent(scheduler._els.dhx_cal_data[0], "mouseover", scheduler._year_view_tooltip_handler)
    }, scheduler.attachEvent("onSchedulerResize", function () {
        return e() ? (this.year_view(!0), !1) : !0
    }), scheduler._get_year_cell = function (e) {
        var t = e.getMonth() + 12 * (e.getFullYear() - this._min_date.getFullYear()) - this.week_starts._month, r = this._els.dhx_cal_data[0].childNodes[t], e = this.week_starts[t] + e.getDate() - 1;
        return r.childNodes[2].firstChild.rows[Math.floor(e / 7)].cells[e % 7].firstChild
    }, scheduler._year_marked_cells = {}, scheduler._mark_year_date = function (e, t) {
        var r = s(e), a = this._get_year_cell(e), d = this.templates.event_class(t.start_date, t.end_date, t);
        scheduler._year_marked_cells[r] || (a.className = "dhx_month_head dhx_year_event", a.setAttribute("date", r), scheduler._year_marked_cells[r] = a), a.className += d ? " " + d : ""
    }, scheduler._unmark_year_date = function (e) {
        this._get_year_cell(e).className = "dhx_month_head"
    }, scheduler._year_render_event = function (e) {
        var t = e.start_date;
        for (t = t.valueOf() < this._min_date.valueOf() ? this._min_date : this.date.date_part(new Date(t)); t < e.end_date;)if (this._mark_year_date(t, e), t = this.date.add(t, 1, "day"), t.valueOf() >= this._max_date.valueOf())return
    }, scheduler.year_view = function (e) {
        var t;
        if (e && (t = scheduler.xy.scale_height, scheduler.xy.scale_height = -1), scheduler._els.dhx_cal_header[0].style.display = e ? "none" : "", scheduler.set_sizes(), e && (scheduler.xy.scale_height = t), scheduler._table_view = e, !this._load_mode || !this._load())if (e) {
            if (scheduler._init_year_tooltip(), scheduler._reset_year_scale(), scheduler._load_mode && scheduler._load())return void(scheduler._render_wait = !0);
            scheduler.render_view_data()
        } else scheduler._hideToolTip()
    }, scheduler._reset_year_scale = function () {
        this._cols = [], this._colsS = {};
        var e = [], t = this._els.dhx_cal_data[0], r = this.config;
        t.scrollTop = 0, t.innerHTML = "";
        var s = Math.floor(parseInt(t.style.width) / r.year_x), a = Math.floor((parseInt(t.style.height) - scheduler.xy.year_top) / r.year_y);
        190 > a && (a = 190, s = Math.floor((parseInt(t.style.width) - scheduler.xy.scroll_width) / r.year_x));
        for (var d = s - 11, n = 0, i = document.createElement("div"), l = this.date.week_start(scheduler._currentDate()), _ = 0; 7 > _; _++)this._cols[_] = Math.floor(d / (7 - _)), this._render_x_header(_, n, l, i), l = this.date.add(l, 1, "day"), d -= this._cols[_], n += this._cols[_];
        i.lastChild.className += " dhx_scale_bar_last";
        for (var o = this.date[this._mode + "_start"](this.date.copy(this._date)), c = o, h = null, _ = 0; _ < r.year_y; _++)for (var u = 0; u < r.year_x; u++) {
            h = document.createElement("DIV"), h.style.cssText = "position:absolute;", h.setAttribute("date", this.templates.xml_format(o)), h.innerHTML = "<div class='dhx_year_month'></div><div class='dhx_year_week'>" + i.innerHTML + "</div><div class='dhx_year_body'></div>", h.childNodes[0].innerHTML = this.templates.year_month(o);
            for (var v = this.date.week_start(o), f = this._reset_month_scale(h.childNodes[2], o, v), p = h.childNodes[2].firstChild.rows, g = p.length; 6 > g; g++) {
                p[0].parentNode.appendChild(p[0].cloneNode(!0));
                for (var m = 0, y = p[g].childNodes.length; y > m; m++)p[g].childNodes[m].className = "dhx_after", p[g].childNodes[m].firstChild.innerHTML = scheduler.templates.month_day(f), f = scheduler.date.add(f, 1, "day")
            }
            t.appendChild(h), h.childNodes[1].style.height = h.childNodes[1].childNodes[0].offsetHeight + "px";
            var x = Math.round((a - 190) / 2);
            h.style.marginTop = x + "px", this.set_xy(h, s - 10, a - x - 10, s * u + 5, a * _ + 5 + scheduler.xy.year_top), e[_ * r.year_x + u] = (o.getDay() - (this.config.start_on_monday ? 1 : 0) + 7) % 7, o = this.date.add(o, 1, "month")
        }
        this._els.dhx_cal_date[0].innerHTML = this.templates[this._mode + "_date"](c, o, this._mode), this.week_starts = e, e._month = c.getMonth(), this._min_date = c, this._max_date = o
    };
    var n = scheduler.getActionData;
    scheduler.getActionData = function (t) {
        if (!e())return n.apply(scheduler, arguments);
        var r = t ? t.target : event.srcElement, s = scheduler._get_year_month_date(r), a = scheduler._get_year_month_cell(r), d = scheduler._get_year_day_indexes(a);
        return d && s ? (s = scheduler.date.add(s, d.week, "week"), s = scheduler.date.add(s, d.day, "day")) : s = null, {date: s, section: null}
    }, scheduler._get_year_day_indexes = function (e) {
        var t = scheduler._locate_year_month_table(e);
        if (!t)return null;
        for (var r = 0, s = 0, r = 0, a = t.rows.length; a > r; r++) {
            for (var d = t.rows[r].getElementsByTagName("td"), s = 0, n = d.length; n > s && d[s] != e; s++);
            if (n > s)break
        }
        return a > r ? {day: s, week: r} : null
    }, scheduler._get_year_month_date = function (e) {
        var e = scheduler._locate_year_month_root(e);
        if (!e)return null;
        var t = e.getAttribute("date");
        return t ? scheduler.date.week_start(scheduler.templates.xml_date(t)) : null
    }, scheduler._locate_year_month_day = function (e) {
        return e.className && -1 != e.className.indexOf("dhx_year_event") && e.hasAttribute && e.hasAttribute("date")
    };
    var i = scheduler._locate_event;
    scheduler._locate_event = function (e) {
        var t = i.apply(scheduler, arguments);
        if (!t) {
            var r = scheduler._get_year_el_node(e, scheduler._locate_year_month_day);
            if (!r || !r.hasAttribute("date"))return null;
            var s = scheduler.templates.xml_date(r.getAttribute("date")), a = scheduler.getEvents(s, scheduler.date.add(s, 1, "day"));
            if (!a.length)return null;
            t = a[0].id
        }
        return t
    }, scheduler._locate_year_month_cell = function (e) {
        return"td" == e.nodeName.toLowerCase()
    }, scheduler._locate_year_month_table = function (e) {
        return"table" == e.nodeName.toLowerCase()
    }, scheduler._locate_year_month_root = function (e) {
        return e.hasAttribute && e.hasAttribute("date")
    }, scheduler._get_year_month_cell = function (e) {
        return this._get_year_el_node(e, this._locate_year_month_cell)
    }, scheduler._get_year_month_table = function (e) {
        return this._get_year_el_node(e, this._locate_year_month_table)
    }, scheduler._get_year_month_root = function (e) {
        return this._get_year_el_node(this._get_year_month_table(e), this._locate_year_month_root)
    }, scheduler._get_year_el_node = function (e, t) {
        for (; e && !t(e);)e = e.parentNode;
        return e
    }
}();
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_year_view.js.map