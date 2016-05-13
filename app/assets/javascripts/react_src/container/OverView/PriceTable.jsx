import React from 'react'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import moment from 'moment'
import {getPrice,isNothing} from './model'
const {Table, Column, Cell} = require('fixed-data-table');
import R from 'ramda'
import PriceSubTable from './PriceSubTable.jsx'


function PriceTable({className,PriceData}){


    console.log(PriceData)

    const _loadingData = ()=>{

        if(PriceData.isEmpty){
            return <h1>Loading</h1>
        }



        return  (<div>
                    <PriceSubTable  tableData={PriceData.WeekdayPrices} tablelabel="周中"/>
                    <PriceSubTable tableData={PriceData.WeekEndPrices} tablelabel="周末"/>
                </div>)

    }


    return (
        <Card>
            {_loadingData()}
        </Card>);


}

export default PriceTable