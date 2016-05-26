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
        text: '',
        x: -20 //center
    },

    xAxis: {
        categories: []
    },
    series: [],
    yAxis: {
        title: {
            text: ''
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




function PriceChart({chartData}){



    const _loadingData =  ()=>{

        const PriceData = chartData.PriceData
        const chartSettings = chartData.chartSettings

        if(isNothing(PriceData)){
            return <h1>Loading</h1>
        }

        const Filter =(title,data)=> R.compose(R.pluck(title),R.values)(data);

        console.log('rategrid_stay PriceChart data: ', PriceData)

        let seriesname = []

        seriesname=Object.keys(PriceData[0]).map((i)=>i)
        seriesname = seriesname.filter(item => item !==chartSettings.xName)

        let temp = []
        let i

        console.log('seriesname: ', seriesname)

        config.series=[]

        for (i=0; i<seriesname.length; i++) {
            temp = Filter(seriesname[i],PriceData)
            temp = temp.map( item => { return item == 'N/A' ? '' : item})
            config.series.push({'name':seriesname[i], 'data':temp})
            // console.log('temp: ', temp)
        }

        //get x axix name

        temp = Filter(chartSettings.xName,PriceData)

        config.xAxis.categories = temp


        config.title.text = chartSettings.title
        config.yAxis.title.text = chartSettings.yTitle

        console.log('config: ', config)


        return   <ReactHighcharts config={config} />

    }

    return (
        <Card>
            {_loadingData()}
        </Card>);
}

export default PriceChart