import React from 'react'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import moment from 'moment'
import {getPrice,isNothing} from './model'
const {Table, Column, Cell} = require('fixed-data-table');
import R from 'ramda'


class MyTextCell extends React.Component {
    render() {
        const {rowIndex, field, data, ...props} = this.props;
        return (
            <Cell {...props}>
                {data[rowIndex][field]}
            </Cell>
        );
    }
}


class AvgMyTextCell extends React.Component {
    render() {
        const {rowIndex, total,num, data, ...props} = this.props;
        return (
            <Cell {...props}>
                {((data[rowIndex][total]/data[rowIndex][num])*10>>0)/10}
            </Cell>
        );
    }
}


function PriceSubTable({tableData,tablelabel}){
    console.log(tableData)
    return (
        <h1>

            <Table
                rowsCount={tableData.length}
                rowHeight={50}
                headerHeight={50}
                width={560}
                height={202}>

                <Column
                    header={<Cell>{tablelabel}</Cell>}
                    cell={
                                        <MyTextCell
                                          data={tableData}
                                          field="label"
                                        />
                                      }
                    width={170}
                />
                <Column
                    header={<Cell>最高价格</Cell>}
                    cell={
                                        <MyTextCell
                                          data={tableData}
                                          field="max"
                                        />
                                      }
                    width={130}
                />
                <Column
                    header={<Cell>平均价格</Cell>}
                    cell={
                                        <AvgMyTextCell
                                          data={tableData}
                                          total="total"
                                          num="num"
                                        />
                                      }
                    width={130}
                />

                <Column
                    header={<Cell>最低价格</Cell>}
                    cell={
                                        <MyTextCell
                                          data={tableData}
                                          field="min"
                                        />
                                      }
                    width={130}
                />
            </Table>


        </h1>
    )


}

export default PriceSubTable

