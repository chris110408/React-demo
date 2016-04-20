import React, {Component} from 'react';
import moment from 'moment';
import $ from 'jquery';
import fullCalendar from 'fullcalendar';
import Tooltip from '../lib/tooltip'

export default class Calendar extends  React.Component{
    constructor(props){
        super(props);
        this.setupCalendar= this.setupCalendar.bind(this)
    }

    componentDidMount(){
        const { calendar } = this.refs;
        this.setupCalendar($(calendar));
    }


    setupCalendar(calendarNode){
        console.log(this);
        calendarNode.fullCalendar(
            calendarSetting.call(this)
        )
    }

    render(){
        return(
            <div ref="calendar"></div>
        )

    }

}

function calendarSetting(){
    return ({editable: true,
        buttonText: {
            today: '今天',
        },
        allDayText: "全天",
        timeFormat: {
            '': 'H:mm{-H:mm}'
        },
        weekMode: "variable",
        columnFormat: {
            month: 'dddd',
            week: 'dddd M-d',
            day: 'dddd M-d'
        },
        titleFormat: {
            month: 'Y年 MMMM月',
        },
        monthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        dayNames: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        header: {
            left: 'prev,next today',
            center: 'title',
            right:''

        },

        events: this.props.events,
        eventMouseover(event, jsEvent, view) {
            new Tooltip(jsEvent, event).show();
        },
        eventMouseout(event, jsEvent, view) {
            new Tooltip(jsEvent).hide();
        }
    })


}
