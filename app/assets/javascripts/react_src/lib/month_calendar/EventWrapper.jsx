import React ,{Component}from 'react'
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import ReactTooltip from 'react-tooltip'
import _ from 'lodash'

const propTypes = {
    DayEvent_handleMouseOver: React.PropTypes.func,
    DayEvent_handleMouseOut: React.PropTypes.func,
};



 class EventWrapper extends Component{


     constructor(props) {
         super(props);

         this._eventTargets = {};
         this.refel={};
     }

    render(){

        const eventClasses = classnames({
            'price-event': true,
            'event': true,

        });

        const day = this.props.day
        const data = day.singledayEvent
        const refid= `${day.date}single`
          return    <div data-tip data-for={refid}
                         key={refid}
                          className = {eventClasses}

                           onMouseOver={this.props.DayEvent_handleMouseOver.bind(null,refid,data)}
                           onMouseOut={this.props.DayEvent_handleMouseOut.bind(this,refid,data)}
                        >

                         {this.props.children}
                      </div>


    }
}

EventWrapper.propTypes =propTypes;

export default EventWrapper

