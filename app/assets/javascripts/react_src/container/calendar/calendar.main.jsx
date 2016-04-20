import React from 'react'

import Row from 'react-materialize/lib/Row';

class Calendar extends React.Component{
    componentWillMount(){


    }

    render(){

        const herf=this.props.params.hotelId

        return (


        <Row>
            <h1>Calendar</h1>
            {herf}
        </Row>
    )}

}


export default Calendar