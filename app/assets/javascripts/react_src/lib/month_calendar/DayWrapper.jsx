import React,{Component}from 'react';
import classnames from 'classnames';
import EventWrapper from './EventWrapper.jsx'
import moment from 'moment';
import Badge from 'material-ui/lib/Badge';
class DayWrapper extends Component {

    constructor(props){
        super(props);
    }



    render() {
        let day = this.props.day;
        let currentDate= this.props.currentDate
        let id = 'day-'+this.props.id;
        const dayClasses=classnames({
            'mc-col':true,
             day:true,
            'inactive':day.siblingMonth,
            'day-wrapper':true,
            today:this.props.today==day.date,
            select:day.date==currentDate.format('YYYY-MM-DD')
        })
        const currentPrice = day.singledayEvent.current_price
        const suggestPrice = day.singledayEvent.price_suggestion

        return <div
            className={dayClasses} onClick={this.props.DayWrapper_DayClick.bind(null,day,currentDate)}
              >

            <div className='date'>{day.day}</div>

            <EventWrapper
                eventtarget={this.props.eventtarget}
                day = {day}
                getRefid={this.props.getRefid}
                DayEvent_handleMouseOver={this.props.DayEvent_handleMouseOver}
                DayEvent_handleMouseOut={this.props.DayEvent_handleMouseOut}
            >

                <div  className='price'>{currentPrice}</div>
                <div  className='suggestion'>{suggestPrice}</div>

            </EventWrapper>


        </div>


    }






}






export default DayWrapper;

//ref={(component) => {this.eventTarget =component}}