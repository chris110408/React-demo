



import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Table from './griddleTable.jsx'
import AppBar from 'material-ui/lib/app-bar';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import dummyData from '../../../dummyData/index'
import {connect} from 'react-redux'


import {get_rate_data} from '../../actions/index.jsx'

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






class RateGrid extends React.Component{


    componentWillMount(){

        this.props.get_rate_data(this.props.params.hotelId);
    }

    render() {

        const _getTable=()=>{

            if(this.props.rate_data.length==0){
                return <h1>Loading</h1>
            }
            return <Table data={this.props.rate_data}/>
        }

        return (
            <Paper style={styles.paper} zDepth={1}>
                <Card >

                    <h2 style={styles.head}>竞争对手价格</h2>
                    {_getTable()}

                </Card>
            </Paper>

        )
    }
}
function mapStateToProps(state){
    return {rate_data:state.ratedata
    }
}


export default connect(mapStateToProps,{get_rate_data})( RateGrid );


