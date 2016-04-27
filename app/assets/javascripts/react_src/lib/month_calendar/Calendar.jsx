import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import {Calendar} from 'calendar-base';
import classnames from 'classnames';
import _ from 'lodash'
import Header from './Header.jsx'
import {standardDateFormat} from './local_utils/converter'
import DayWrapper from './DayWrapper.jsx'
import ToolBar from './Toolbar.jsx'
import Card from 'material-ui/lib/card/card';
import moment from 'moment'


const propTypes = {


    //data price information data -3 month data prev month current month and next month  key format is "YYYY-MM-DD"

    caldata: React.PropTypes.shape({
        ['key-date']: React.PropTypes.number,

    }),

    //currentDate
    currentDate: React.PropTypes.instanceOf(moment),



    // today generate from moment() format is "YYYY-MM-DD"
    today:React.PropTypes.string,

                                           //pass to  DayEvent - singledayevent
    /*mouse moveover day event show  tooltip

     * ```js
     * function ({ refid: string, data: Object })
     * ```
     */
    DayEvent_handleMouseOver: React.PropTypes.func,

    /*mouse moveout day event change this.state showPopover to false

     * ```js
     * function ({ refid: string, data: Object })
     * ```
     */
    DayEvent_handleMouseOut: React.PropTypes.func,

                                  //pass to ToolBar functions

    /*get the month value of dropdown and

     * ```js
     * function ({ event : obj, index: num, value:num })
     * ```
     */

    toobar_MonthChange : React.PropTypes.func,
    /*mouse moveout day event change this.state showPopover to false

     /*get the year value of dropdown and

     * ```js
     * function ({ event : obj, index: num, value:num })
     * ```
     */
    toobar_yearChange : React.PropTypes.func,

    /*click tool bar next and prev month button
      ***there is a plus1 and minus1 private callback function in the toolbar mod pass the plus1
     * ```js
     * function ({ cb :function})
     * ```
     */
    toobar_MohthButtonClick : React.PropTypes.func,


                                //dayWrapper
    /*click tool bar next and prev month button
     ***there is a plus1 and minus1 private callback function in the toolbar mod pass the plus1
     * ```js
     * function ({ day:obj(calendar-base[day data]),currentDate : obj(moment)})
     * ```
     */

    DayWrapper_DayClick : React.PropTypes.func,
};


class MonthCalendar extends Component{
    constructor(props) {
        super(props);
    }



    componentWillMount() {
        this.calendar = new Calendar({siblingMonths: true, });
    }

    getCalendarDays(data) {

        //will change to dynamic latter

        const singledayEvent={
            current_price:'NA',
            max_competitor:'NA',
            min_competitor:'NA',
            avg_competitor:'NA',
            price_index:0,
            price_suggestion:''
        }

        const curDate = this.props.currentDate
        const curMonth = curDate.month()
        const curYear = curDate.year()
        const NodataDay = (day) => {
            day.date=standardDateFormat(day.year,day.month+1,day.day)
            day.singledayEvent=singledayEvent
            day.rangeDaysEvent=[]
            return day;
        }
        const matchCalData = (day) =>{
            let key = day.date
            if(data[''+key]){
                day.singledayEvent=data[''+key]
            }
            return day

        }
        return this.calendar.getCalendar(curYear,curMonth)
                            .map(NodataDay)
                            .map(matchCalData)

    }

    render() {



        let daysOfThisMonth=(this.getCalendarDays(this.props.caldata))
        let weeks  = _.chunk(daysOfThisMonth, 7);
        return (
            <div>
                <ToolBar
                    toobar_yearChange = {this.props.toobar_yearChange}
                    toobar_MonthChange = {this.props.toobar_MonthChange}
                    toobar_MohthButtonClick = {this.props.toobar_MohthButtonClick}
                    currentDate={this.props.currentDate}
                />

                    <div className="mc-month">

                            <Header/>
                        {weeks.map((week,id) =>
                            this.renderWeek(week,id))

                        }

                    </div>

            </div>
        );
    }



    renderWeek(week,id){
        return  <div key={'week_' + id}
                        className='mc-row'
                >
            {week.map((day,id)=>{

                const dayClasses=classnames({
                    'mc-col':true,
                     day:true,
                     'inactive':day.siblingMonth,

                })

                return <DayWrapper
                            key = {'day'+id}
                            day={day}
                            DayWrapper_DayClick = {this.props.DayWrapper_DayClick}
                            DayEvent_handleMouseOver = {this.props.DayEvent_handleMouseOver}
                            DayEvent_handleMouseOut = {this.props.DayEvent_handleMouseOut}
                            currentDate = {this.props.currentDate}
                            today = {this.props.today}
                        />


            })}
                </div>
    }

}

MonthCalendar.propTypes = propTypes;

export default MonthCalendar