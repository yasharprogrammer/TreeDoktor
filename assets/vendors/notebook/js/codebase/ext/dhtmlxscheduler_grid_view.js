/*
 dhtmlxScheduler v.4.1.0 Stardard

 This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

 (c) Dinamenta, UAB.
 */
!function () {
    scheduler._grid = {sort_rules: {"int": function (e, t, s) {
        return 1 * s(e) < 1 * s(t) ? 1 : -1
    }, str: function (e, t, s) {
        return s(e) < s(t) ? 1 : -1
    }, date: function (e, t, s) {
        return new Date(s(e)) < new Date(s(t)) ? 1 : -1
    }}, _getObjName: function (e) {
        return"grid_" + e
    }, _getViewName: function (e) {
        return e.replace(/^grid_/, "")
    }}
}(), scheduler.createGridView = function (e) {
    function t(e) {
        return!(void 0 !== e && (1 * e != e || 0 > e))
    }

    var s = e.name || "grid", i = scheduler._grid._getObjName(s);
    scheduler.config[s + "_start"] = e.from || new Date(0), scheduler.config[s + "_end"] = e.to || new Date(9999, 1, 1), scheduler[i] = e, scheduler[i].defPadding = 8, scheduler[i].columns = scheduler[i].fields, scheduler[i].unit = e.unit || "month", scheduler[i].step = e.step || 1, delete scheduler[i].fields;
    for (var r = scheduler[i].columns, n = 0; n < r.length; n++)t(r[n].width) && (r[n].initialWidth = r[n].width), t(r[n].paddingLeft) || delete r[n].paddingLeft, t(r[n].paddingRight) || delete r[n].paddingRight;
    scheduler[i].select = void 0 === e.select ? !0 : e.select, void 0 === scheduler.locale.labels[s + "_tab"] && (scheduler.locale.labels[s + "_tab"] = scheduler[i].label || scheduler.locale.labels.grid_tab), scheduler[i]._selected_divs = [], scheduler.date[s + "_start"] = function (t) {
        return scheduler.date[e.unit + "_start"] ? scheduler.date[e.unit + "_start"](t) : t
    }, scheduler.date["add_" + s] = function (e, t) {
        return scheduler.date.add(e, t * scheduler[i].step, scheduler[i].unit)
    }, scheduler.templates[s + "_date"] = function (e, t) {
        return scheduler.templates.day_date(e) + " - " + scheduler.templates.day_date(t)
    }, scheduler.templates[s + "_full_date"] = function (e, t, i) {
        return scheduler.isOneDayEvent(i) ? this[s + "_single_date"](e) : scheduler.templates.day_date(e) + " &ndash; " + scheduler.templates.day_date(t)
    }, scheduler.templates[s + "_single_date"] = function (e) {
        return scheduler.templates.day_date(e) + " " + this.event_date(e)
    }, scheduler.templates[s + "_field"] = function (e, t) {
        return t[e]
    }, scheduler.attachEvent("onTemplatesReady", function () {
        scheduler.attachEvent("onDblClick", function (e) {
            return this._mode == s ? (scheduler._click.buttons.details(e), !1) : !0
        }), scheduler.attachEvent("onClick", function (e, t) {
            return this._mode == s && scheduler[i].select ? (scheduler._grid.unselectEvent("", s), scheduler._grid.selectEvent(e, s, t), !1) : !0
        }), scheduler.attachEvent("onSchedulerResize", function () {
            return this._mode == s ? (this[s + "_view"](!0), window.setTimeout(function () {
                scheduler.callEvent("onAfterSchedulerResize", [])
            }, 1), !1) : !0
        });
        var e = scheduler.render_data;
        scheduler.render_data = function () {
            return this._mode != s ? e.apply(this, arguments) : void scheduler._grid._fill_grid_tab(i)
        };
        var t = scheduler.render_view_data;
        scheduler.render_view_data = function () {
            return this._mode == s ? (scheduler._grid._gridScrollTop = scheduler._els.dhx_cal_data[0].childNodes[0].scrollTop, scheduler._els.dhx_cal_data[0].childNodes[0].scrollTop = 0, scheduler._els.dhx_cal_data[0].style.overflowY = "auto") : scheduler._els.dhx_cal_data[0].style.overflowY = "auto", t.apply(this, arguments)
        }
    }), scheduler[s + "_view"] = function (e) {
        if (e) {
            var t = null, r = null, n = scheduler[i];
            n.paging ? (t = scheduler.date[s + "_start"](new Date(scheduler._date)), r = scheduler.date["add_" + s](t, 1)) : (t = scheduler.config[s + "_start"], r = scheduler.config[s + "_end"]), scheduler._min_date = t, scheduler._max_date = r, scheduler._grid.set_full_view(i);
            var a = "";
            +t > +new Date(0) && +r < +new Date(9999, 1, 1) && (a = scheduler.templates[s + "_date"](t, r)), scheduler._els.dhx_cal_date[0].innerHTML = a, scheduler._gridView = i
        } else scheduler._grid._sort_marker = null, delete scheduler._gridView, scheduler._rendered = [], scheduler[i]._selected_divs = []
    }
}, scheduler.dblclick_dhx_grid_area = function () {
    !this.config.readonly && this.config.dblclick_create && this.addEventNow()
}, scheduler._click.dhx_cal_header && (scheduler._old_header_click = scheduler._click.dhx_cal_header), scheduler._click.dhx_cal_header = function (e) {
    if (scheduler._gridView) {
        var t = e || window.event, s = scheduler._grid.get_sort_params(t, scheduler._gridView);
        scheduler._grid.draw_sort_marker(t.originalTarget || t.srcElement, s.dir), scheduler.clear_view(), scheduler._grid._fill_grid_tab(scheduler._gridView, s)
    } else if (scheduler._old_header_click)return scheduler._old_header_click.apply(this, arguments)
}, scheduler._grid.selectEvent = function (e, t, s) {
    if (scheduler.callEvent("onBeforeRowSelect", [e, s])) {
        var i = scheduler._grid._getObjName(t);
        scheduler.for_rendered(e, function (e) {
            e.className += " dhx_grid_event_selected", scheduler[i]._selected_divs.push(e)
        }), scheduler._select_id = e
    }
}, scheduler._grid._unselectDiv = function (e) {
    e.className = e.className.replace(/ dhx_grid_event_selected/, "")
}, scheduler._grid.unselectEvent = function (e, t) {
    var s = scheduler._grid._getObjName(t);
    if (s && scheduler[s]._selected_divs)if (e) {
        for (var i = 0; i < scheduler[s]._selected_divs.length; i++)if (scheduler[s]._selected_divs[i].getAttribute("event_id") == e) {
            scheduler._grid._unselectDiv(scheduler[s]._selected_divs[i]), scheduler[s]._selected_divs.slice(i, 1);
            break
        }
    } else {
        for (var i = 0; i < scheduler[s]._selected_divs.length; i++)scheduler._grid._unselectDiv(scheduler[s]._selected_divs[i]);
        scheduler[s]._selected_divs = []
    }
}, scheduler._grid.get_sort_params = function (e, t) {
    var s = e.originalTarget || e.srcElement, i = "desc";
    "dhx_grid_view_sort" == s.className && (s = s.parentNode), s.className && -1 != s.className.indexOf("dhx_grid_sort_asc") || (i = "asc");
    for (var r = 0, n = 0; n < s.parentNode.childNodes.length; n++)if (s.parentNode.childNodes[n] == s) {
        r = n;
        break
    }
    var a = null;
    if (scheduler[t].columns[r].template) {
        var d = scheduler[t].columns[r].template;
        a = function (e) {
            return d(e.start_date, e.end_date, e)
        }
    } else {
        var l = scheduler[t].columns[r].id;
        "date" == l && (l = "start_date"), a = function (e) {
            return e[l]
        }
    }
    var o = scheduler[t].columns[r].sort;
    return"function" != typeof o && (o = scheduler._grid.sort_rules[o] || scheduler._grid.sort_rules.str), {dir: i, value: a, rule: o}
}, scheduler._grid.draw_sort_marker = function (e, t) {
    "dhx_grid_view_sort" == e.className && (e = e.parentNode), scheduler._grid._sort_marker && (scheduler._grid._sort_marker.className = scheduler._grid._sort_marker.className.replace(/( )?dhx_grid_sort_(asc|desc)/, ""), scheduler._grid._sort_marker.removeChild(scheduler._grid._sort_marker.lastChild)), e.className += " dhx_grid_sort_" + t, scheduler._grid._sort_marker = e;
    var s = "<div class='dhx_grid_view_sort' style='left:" + (+e.style.width.replace("px", "") - 15 + e.offsetLeft) + "px'>&nbsp;</div>";
    e.innerHTML += s
}, scheduler._grid.sort_grid = function (e) {
    var e = e || {dir: "desc", value: function (e) {
        return e.start_date
    }, rule: scheduler._grid.sort_rules.date}, t = scheduler.get_visible_events();
    return t.sort("desc" == e.dir ? function (t, s) {
        return e.rule(t, s, e.value)
    } : function (t, s) {
        return-e.rule(t, s, e.value)
    }), t
}, scheduler._grid.set_full_view = function (e) {
    if (e) {
        var t = (scheduler.locale.labels, scheduler._grid._print_grid_header(e));
        scheduler._els.dhx_cal_header[0].innerHTML = t, scheduler._table_view = !0, scheduler.set_sizes()
    }
}, scheduler._grid._calcPadding = function (e, t) {
    var s = (void 0 !== e.paddingLeft ? 1 * e.paddingLeft : scheduler[t].defPadding) + (void 0 !== e.paddingRight ? 1 * e.paddingRight : scheduler[t].defPadding);
    return s
}, scheduler._grid._getStyles = function (e, t) {
    for (var s = [], i = "", r = 0; t[r]; r++)switch (i = t[r] + ":", t[r]) {
        case"text-align":
            e.align && s.push(i + e.align);
            break;
        case"vertical-align":
            e.valign && s.push(i + e.valign);
            break;
        case"padding-left":
            void 0 !== e.paddingLeft && s.push(i + (e.paddingLeft || "0") + "px");
            break;
        case"padding-right":
            void 0 !== e.paddingRight && s.push(i + (e.paddingRight || "0") + "px")
    }
    return s
}, scheduler._grid._fill_grid_tab = function (e, t) {
    for (var s = (scheduler._date, scheduler._grid.sort_grid(t)), i = scheduler[e].columns, r = "<div>", n = -2, a = 0; a < i.length; a++) {
        var d = scheduler._grid._calcPadding(i[a], e);
        n += i[a].width + d, a < i.length - 1 && (r += "<div class='dhx_grid_v_border' style='left:" + n + "px'></div>")
    }
    r += "</div>", r += "<div class='dhx_grid_area'><table>";
    for (var a = 0; a < s.length; a++)r += scheduler._grid._print_event_row(s[a], e);
    r += "</table></div>", scheduler._els.dhx_cal_data[0].innerHTML = r, scheduler._els.dhx_cal_data[0].scrollTop = scheduler._grid._gridScrollTop || 0;
    var l = scheduler._els.dhx_cal_data[0].getElementsByTagName("tr");
    scheduler._rendered = [];
    for (var a = 0; a < l.length; a++)scheduler._rendered[a] = l[a]
}, scheduler._grid._print_event_row = function (e, t) {
    var s = [];
    e.color && s.push("background:" + e.color), e.textColor && s.push("color:" + e.textColor), e._text_style && s.push(e._text_style), scheduler[t].rowHeight && s.push("height:" + scheduler[t].rowHeight + "px");
    var i = "";
    s.length && (i = "style='" + s.join(";") + "'");
    for (var r = scheduler[t].columns, n = scheduler.templates.event_class(e.start_date, e.end_date, e), a = "<tr class='dhx_grid_event" + (n ? " " + n : "") + "' event_id='" + e.id + "' " + i + ">", d = scheduler._grid._getViewName(t), l = ["text-align", "vertical-align", "padding-left", "padding-right"], o = 0; o < r.length; o++) {
        var h;
        h = r[o].template ? r[o].template(e.start_date, e.end_date, e) : "date" == r[o].id ? scheduler.templates[d + "_full_date"](e.start_date, e.end_date, e) : "start_date" == r[o].id || "end_date" == r[o].id ? scheduler.templates[d + "_single_date"](e[r[o].id]) : scheduler.templates[d + "_field"](r[o].id, e);
        var _ = scheduler._grid._getStyles(r[o], l), c = r[o].css ? ' class="' + r[o].css + '"' : "";
        a += "<td style='width:" + r[o].width + "px;" + _.join(";") + "' " + c + ">" + h + "</td>"
    }
    return a += "<td class='dhx_grid_dummy'></td></tr>"
}, scheduler._grid._print_grid_header = function (e) {
    for (var t = "<div class='dhx_grid_line'>", s = scheduler[e].columns, i = [], r = s.length, n = scheduler._obj.clientWidth - 2 * s.length - 20, a = 0; a < s.length; a++) {
        var d = 1 * s[a].initialWidth;
        isNaN(d) || "" === s[a].initialWidth || null === s[a].initialWidth || "boolean" == typeof s[a].initialWidth ? i[a] = null : (r--, n -= d, i[a] = d)
    }
    for (var l = Math.floor(n / r), o = ["text-align", "padding-left", "padding-right"], h = 0; h < s.length; h++) {
        var _ = i[h] ? i[h] : l;
        s[h].width = _ - scheduler._grid._calcPadding(s[h], e);
        var c = scheduler._grid._getStyles(s[h], o);
        t += "<div style='width:" + (s[h].width - 1) + "px;" + c.join(";") + "'>" + (void 0 === s[h].label ? s[h].id : s[h].label) + "</div>"
    }
    return t += "</div>"
};
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_grid_view.js.map