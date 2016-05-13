import React from 'react'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import ReactHighcharts from 'react-highcharts';
import Highlight from 'react-highlight';
import R from 'ramda'
const config = {
    title: {
        text: '90 Days Average Price ',
        x: -20 //center
    },

    xAxis: {
        categories: []
    },
    series: [
        {
            name: 'hotel',
            data: []
        },
        {
        name: 'Comp',
        data: []
    }
    ],
    yAxis: {
        title: {
            text: 'Hotel Average Price(¥)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
};

const isNothing = (obj) =>{
    if(obj== null ||obj == undefined ||R.keys(obj).length==0){

        return true ;
    }

    return false;

}




function PriceChart({PriceData}){



    const _loadingData =  ()=>{


        if(isNothing(PriceData.HOTEL_DATA)){
            return <h1>Loading</h1>
        }

        const HotelPrices = R.compose(R.pluck('price'),R.values)(PriceData.HOTEL_DATA)
        const CompPrices = R.compose(R.pluck('avg_competitor'),R.values)(PriceData.COMP_DATA)

        config.series[0].data=HotelPrices
        config.series[1].data=CompPrices;

        return   <ReactHighcharts config={config} />

    }

    return (
        <Card>
            {_loadingData()}
        </Card>);


}

export default PriceChart