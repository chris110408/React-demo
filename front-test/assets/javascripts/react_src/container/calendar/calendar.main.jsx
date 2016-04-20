import React from 'react'

class Calendar extends React.Component{
    componentWillMount(){
        console.log(this.props.params)

    }

    render(){

        const herf=this.props.params.hotelId

        return (


        <div>
            <h1>Calendar</h1>
            {herf}
        </div>
    )}

}


export default Calendar