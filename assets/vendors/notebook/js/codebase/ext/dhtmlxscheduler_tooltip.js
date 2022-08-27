/*
 dhtmlxScheduler v.4.1.0 Stardard

 This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

 (c) Dinamenta, UAB.
 */
window.dhtmlXTooltip = scheduler.dhtmlXTooltip = window.dhtmlxTooltip = {}, dhtmlXTooltip.config = {className: "dhtmlXTooltip tooltip", timeout_to_display: 50, timeout_to_hide: 50, delta_x: 15, delta_y: -20}, dhtmlXTooltip.tooltip = document.createElement("div"), dhtmlXTooltip.tooltip.className = dhtmlXTooltip.config.className, dhtmlXTooltip.show = function (e, t) {
    if (!scheduler.config.touch || scheduler.config.touch_tooltip) {
        var r = dhtmlXTooltip, s = this.tooltip, a = s.style;
        r.tooltip.className = r.config.className;
        var i = this.position(e), n = e.target || e.srcElement;
        if (!this.isTooltip(n)) {
            var d = i.x + (r.config.delta_x || 0), l = i.y - (r.config.delta_y || 0);
            a.visibility = "hidden", a.removeAttribute ? (a.removeAttribute("right"), a.removeAttribute("bottom")) : (a.removeProperty("right"), a.removeProperty("bottom")), a.left = "0", a.top = "0", this.tooltip.innerHTML = t, document.body.appendChild(this.tooltip);
            var o = this.tooltip.offsetWidth, _ = this.tooltip.offsetHeight;
            document.body.offsetWidth - d - o < 0 ? (a.removeAttribute ? a.removeAttribute("left") : a.removeProperty("left"), a.right = document.body.offsetWidth - d + 2 * (r.config.delta_x || 0) + "px") : a.left = 0 > d ? i.x + Math.abs(r.config.delta_x || 0) + "px" : d + "px", document.body.offsetHeight - l - _ < 0 ? (a.removeAttribute ? a.removeAttribute("top") : a.removeProperty("top"), a.bottom = document.body.offsetHeight - l - 2 * (r.config.delta_y || 0) + "px") : a.top = 0 > l ? i.y + Math.abs(r.config.delta_y || 0) + "px" : l + "px", a.visibility = "visible", this.tooltip.onmouseleave = function (e) {
                for (var t = scheduler.dhtmlXTooltip, r = e.relatedTarget; r != scheduler._obj && r;)r = r.parentNode;
                r != scheduler._obj && t.delay(t.hide, t, [], t.config.timeout_to_hide)
            }, scheduler.callEvent("onTooltipDisplayed", [this.tooltip, this.tooltip.event_id])
        }
    }
}, dhtmlXTooltip._clearTimeout = function () {
    this.tooltip._timeout_id && window.clearTimeout(this.tooltip._timeout_id)
}, dhtmlXTooltip.hide = function () {
    if (this.tooltip.parentNode) {
        var e = this.tooltip.event_id;
        this.tooltip.event_id = null, this.tooltip.onmouseleave = null, this.tooltip.parentNode.removeChild(this.tooltip), scheduler.callEvent("onAfterTooltip", [e])
    }
    this._clearTimeout()
}, dhtmlXTooltip.delay = function (e, t, r, s) {
    this._clearTimeout(), this.tooltip._timeout_id = setTimeout(function () {
        var s = e.apply(t, r);
        return e = t = r = null, s
    }, s || this.config.timeout_to_display)
}, dhtmlXTooltip.isTooltip = function (e) {
    var t = !1;
    for ("dhtmlXTooltip" == e.className.split(" ")[0]; e && !t;)t = e.className == this.tooltip.className, e = e.parentNode;
    return t
}, dhtmlXTooltip.position = function (e) {
    if (e = e || window.event, e.pageX || e.pageY)return{x: e.pageX, y: e.pageY};
    var t = window._isIE && "BackCompat" != document.compatMode ? document.documentElement : document.body;
    return{x: e.clientX + t.scrollLeft - t.clientLeft, y: e.clientY + t.scrollTop - t.clientTop}
}, scheduler.attachEvent("onMouseMove", function (e, t) {
    var r = window.event || t, s = r.target || r.srcElement, a = dhtmlXTooltip, i = a.isTooltip(s), n = a.isTooltipTarget && a.isTooltipTarget(s);
    if (e || i || n) {
        var d;
        if (e || a.tooltip.event_id) {
            var l = scheduler.getEvent(e) || scheduler.getEvent(a.tooltip.event_id);
            if (!l)return;
            if (a.tooltip.event_id = l.id, d = scheduler.templates.tooltip_text(l.start_date, l.end_date, l), !d)return a.hide()
        }
        n && (d = "");
        var o;
        if (_isIE) {
            o = {pageX: void 0, pageY: void 0, clientX: void 0, clientY: void 0, target: void 0, srcElement: void 0};
            for (var _ in o)o[_] = r[_]
        }
        if (!scheduler.callEvent("onBeforeTooltip", [e]) || !d)return;
        a.delay(a.show, a, [o || r, d])
    } else a.delay(a.hide, a, [], a.config.timeout_to_hide)
}), scheduler.attachEvent("onBeforeDrag", function () {
    return dhtmlXTooltip.hide(), !0
}), scheduler.attachEvent("onEventDeleted", function () {
    return dhtmlXTooltip.hide(), !0
}), scheduler.templates.tooltip_date_format = scheduler.date.date_to_str("%Y-%m-%d %H:%i"), scheduler.templates.tooltip_text = function (e, t, r) {
    return"<b>Event:</b> " + r.text + "<br/><b>Start date:</b> " + scheduler.templates.tooltip_date_format(e) + "<br/><b>End date:</b> " + scheduler.templates.tooltip_date_format(t)
};
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_tooltip.js.map