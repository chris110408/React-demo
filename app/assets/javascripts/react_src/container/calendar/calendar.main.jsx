//need to fix if the props.yyyy-mm != nextprops.yyyy-mm need call ajax get data the update should comes from component life cycle not from each function



import React , { PropTypes }from 'react'
import ReactDOM from 'react-dom';
import moment from 'moment';
import MyCalendar from '../../lib/month_calendar/Calendar.jsx'
import Card from 'material-ui/lib/card/card';
import Paper from 'material-ui/lib/paper';
import ReactTooltip from 'react-tooltip'
import Row from 'react-materialize/lib/Row';
import dummyData from '../../../dummyData/index'
import {connect} from 'react-redux'
import {get_calendar_data,get_event_status,get_current_date} from '../../actions/index.jsx'

const styles = {
    head: {
        height: '56px',
        backgroundColor: '#E8E8E8',
        padding:'8px'
    },
    paper: {
        padding: '28px'

    },
    content: {
        padding: '16px',
        height: '100%',
        backgroundColor: 'white',
    },

    event:{
        background: '#26ad5d',
        color: '#12546e',
        'white-space': 'nowrap',
        'text-indent': '-10000px',
        cursor: 'pointer'


    }
};

class Calendar extends React.Component{




    constructor(props){
        super(props)
        this.state = {
            today:moment().format('YYYY-MM-DD')
        };
        this.DayEvent_handleMouseOver= this.DayEvent_handleMouseOver.bind(this)
    }

    componentWillMount(){
            let current=moment();
            this.props.get_current_date(current)
            this.props.get_calendar_data(this.props.params.hotelId)
    }


    shouldComponentUpdate(nextProps, nextState) {


    return true
   }

    componentWillUpdate(){


    }

   //singleevent at day event

    DayEvent_handleMouseOver= (refid,eventdata) => {


        let event_status = {
            refid    : refid,
            eventdata: eventdata
        }
        this.props.get_event_status(event_status)
    }

    DayEvent_handleMouseOut = () => {};



    //ToolBar
    toobar_MonthChange = (event, index, value) =>  {
        let  curDate = this.props.state.current_date.month(value)
        this.props.get_current_date(curDate)
        // request new calendar data
        this.props.get_calendar_data(this.props.params.hotelId)
    };
    toobar_yearChange = (event, index, value) =>   {
        let curDate = this.props.state.current_date.year(value)
        this.props.get_current_date(curDate)
        // request new calendar data
        this.props.get_calendar_data(this.props.params.hotelId)
    };

    toobar_MohthButtonClick = (cb) => {
        let nextDate;
        let currentDate = this.props.state.current_date;
        let currentMonth = currentDate.month();
        let nextMonth = cb(currentMonth);
        let nextYear =currentDate.year();
        //if month < 0 or >11 need to reset month and change year
        if (nextMonth < 0 || nextMonth>11){
            nextMonth= nextMonth < 0 ? 11 :0;
            nextYear = cb(nextYear)
            nextDate=currentDate.year(nextYear)
        }
        nextDate=currentDate.month(nextMonth)

        this.props.get_current_date(nextDate)
        // request new calendar data
        this.props.get_calendar_data(this.props.params.hotelId)

    }
   //dayWrapper
    DayWrapper_DayClick(day,currentDate){
        let curDate = moment().set({'year': day.year, 'month': day.month, 'date': day.day});
        this.props.get_current_date(curDate)

    }

    getDataThisMonth(hotelId){

        let dummydata = this.props.state.calendar_data
        let tempdate=this.props.state.current_date.clone()
        //init monthKeyArr
        let monthKeyArr = [];
        let prevMonthKey=tempdate.clone().add(-1,'months').format('YYYY-MM');
        let curretMonthKey= tempdate.clone().format('YYYY-MM');
        let nextMonthKey=tempdate.clone().add(1,'months').format('YYYY-MM');
        monthKeyArr.push(prevMonthKey);
        monthKeyArr.push(curretMonthKey);
        monthKeyArr.push(nextMonthKey);

        const _add3monthdata = (acc,key)=>{

            if(dummydata[''+key])
            {
                let tempObj = dummydata[''+key];
                Object.keys(tempObj).forEach((key)=>{
                    acc[''+key] = tempObj[''+ key];
                })
            }
            return acc
        }
        monthKeyArr.reduce(_add3monthdata,{})

        let ret =  monthKeyArr.reduce(_add3monthdata,{})
        if (ret){
            return ret
        }
        return {}
    }


    render(){

        let caldata = this.getDataThisMonth()
        const herf=this.props.params.hotelId

        const popdata=(data)=>{

             if (data)
             {return data.current_price}
            return 'na'
        }



        const _loadingData = ()=>{


            if(Object.keys(this.props.state.calendar_data).length === 0){
                return <h1>Loading</h1>
            }

            return  <MyCalendar
                        DayEvent_handleMouseOver={this.DayEvent_handleMouseOver}
                        DayEvent_handleMouseOut={this.DayEvent_handleMouseOut}
                        currentDate={this.props.state.current_date}
                        toobar_yearChange = {this.toobar_yearChange.bind(this)}
                        toobar_MonthChange = {this.toobar_MonthChange.bind(this)}
                        toobar_MohthButtonClick = {this.toobar_MohthButtonClick.bind(this)}
                        DayWrapper_DayClick = {this.DayWrapper_DayClick.bind(this)}
                        today = {this.state.today}
                        caldata = { caldata}
                     />

        }


        return (
            <Paper style={styles.paper} zDepth={1}>




                        {_loadingData()}
                        <ReactTooltip id={this.props.state.event_status.refid} type='error'>
                            <p>酒店价格信息</p>
                            <ul> <li>基础房价: {this.props.state.event_status.eventdata.current_price}</li>
                                <li>竞争对手最高: {this.props.state.event_status.eventdata.max_competitor}</li>
                                <li>竞争对手平均: {this.props.state.event_status.eventdata.avg_competitor}</li>
                                <li>价格指数: {this.props.state.event_status.eventdata.price_index}</li>
                                <li>房价建议: {this.props.state.event_status.eventdata.price_suggestion}</li>
                            </ul>

                        </ReactTooltip>

            </Paper>

    )}

}



function mapStateToProps(state){
    return {state:state.catendar_state
    }
}


export default connect(mapStateToProps,{get_calendar_data,get_event_status,get_current_date})(  Calendar );

