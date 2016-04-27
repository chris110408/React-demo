const React = require('react');
const {Table, Column, Cell} = require('fixed-data-table');
import CsvDownloader from 'react-csv-downloader';
import Card from 'material-ui/lib/card/card';
import dummy from '../../../dummyData/index'
import Paper from 'material-ui/lib/paper';
import {connect} from 'react-redux'
import {get_log_data} from '../../actions/index.jsx'

const styles = {
    head: {
        height: '56px',
        backgroundColor: '#E8E8E8',
        padding:'8px'
    },
    paper: {
        padding: '16px'
    },
    content: {
        padding: '16px',
        height: '100%',
        backgroundColor: 'white',
    },
};

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




class MyDownLoadCell extends React.Component {
    render() {
        const {rowIndex, field, data, ...props} = this.props;
        const link = data[rowIndex][field];

        const columns = [{
            id: 'compid',
            displayName: 'id'
        },{
            id: 'price',
            displayName: 'price'
        }, {
            id: 'stay_date_n',
            displayName: 'stay date'
        },{
            id: 'scrape_date',
            displayName: 'scrape date'
        },
        ];
        return (
            <Cell {...props}>
                <CsvDownloader
                    filename={data[rowIndex][field]+data[rowIndex]['mindate']}
                    separator=","
                    columns={columns}
                    datas={data[rowIndex]['data']}
                    text={data[rowIndex][field]}
                />
            </Cell>
        );
    }
}
const logList=(id)=>{


    return [].concat(dummy.logData[id])
}

class Log extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myTableData: logList(this.props.params.hotelId)
        };
    }

    componentWillMount(){

       this.props.get_log_data(this.props.params.hotelId)
    }


    render() {


        console.log(this.props.logdata)

        return (

            <Paper style={styles.paper} zDepth={1}>
                <Card >

                    <h2 style={styles.head}>竞争对手价格</h2>
                         <Table
                rowsCount={this.props.logdata.length}
                rowHeight={50}
                headerHeight={50}
                width={1000}
                height={500}>
                <Column
                    header={<Cell>酒店</Cell>}
                    cell={
                            <MyDownLoadCell
                              data={this.props.logdata}
                              field="name"
                            />
                        }
                    width={300}
                />
                <Column
                    header={<Cell>开始日期</Cell>}
                    cell={
                            <MyTextCell
                              data={this.props.logdata}
                              field="mindate"
                            />
                          }
                    width={250}
                />
                <Column
                    header={<Cell>结束日期</Cell>}
                    cell={
                            <MyTextCell
                              data={this.props.logdata}
                              field="maxdate"
                            />
                          }
                    width={250}
                />
                <Column
                    header={<Cell>抓取日期</Cell>}
                    cell={
                            <MyTextCell
                              data={this.props.logdata}
                              field="mindate"
                            />
                          }
                    width={250}
                />
            </Table>
                </Card>
            </Paper>
        );
    }
}

function mapStateToProps(state){
    return {logdata:state.log_data
    }
}


export default connect(mapStateToProps,{get_log_data})(  Log );


//filename="myfile"
//separator=","
//columns={columns}
//datas={datas}
//text={this.state.myTableData[props.rowIndex].name} />