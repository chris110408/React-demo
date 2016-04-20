/**
 * Created by leichen on 4/7/16.
 */
import $ from 'jquery';

export default class Tooltip {
    constructor(jsEvent, event) {
        this.el         = jsEvent.currentTarget;
        this.coords     = this.el.getBoundingClientRect();
        this.event      = event;
        this.tooltipDiv = $('.tip');
    }

    show() {
        var eventBoxWidth   = $(this.el).width();
        var eventBoxHeight  = $(this.el).height();
        var x               = this.coords.left + window.scrollX + eventBoxWidth + 'px';
        var y               = this.coords.top + window.scrollY + eventBoxHeight + 'px';

        this.setTextForTooltip();
        this.showTooltip(x, y);
    }

    showTooltip(x, y) {
        this.tooltipDiv.css({
            position: 'absolute',
            display: 'block',
            left: x,
            top: y,
        });
    }

    hide() {
        this.tooltipDiv.css('display', 'none');
    }

    setTextForTooltip() {

        var text = `tips: ${this.event.metadata}<br/>`;


        this.tooltipDiv.html(text);
    }
}
