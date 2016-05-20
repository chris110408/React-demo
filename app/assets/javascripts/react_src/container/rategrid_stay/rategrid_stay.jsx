



import React, {PropTypes} from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Table from '../griddleTable.jsx'
import AppBar from 'material-ui/lib/app-bar';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import {connect} from 'react-redux'


import {comp_sd_fetchIfNeeded} from '../../actions/index.jsx'

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






class RateGrid_stay extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
     const { dispatch } = this.props
        dispatch(comp_sd_fetchIfNeeded())
    }

    componentWillMount(){
        const { dispatch } = this.props

        dispatch(comp_sd_fetchIfNeeded())
    }


    render() {
        const { async_data, isFetching, lastUpdated } = this.props
        console.log('render stay async_data: ', async_data, ' isFetching: ', isFetching, ' lastUpdated: ', lastUpdated)
    

        const _getTable=()=>{

            if(async_data.length==0){
                return <h1>Loading data by staydate</h1>
            }
            return <Table data={async_data}/>
        }

        return (
            <Paper style={styles.paper} zDepth={1}>
                <Card >

                    <h2 style={styles.head}>竞争对手价格(by staydate)</h2>
                    {_getTable()}

                </Card>
            </Paper>

        )
    }
}

RateGrid_stay.propTypes = {
  async_data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { data_comp_sd_state } = state
  const {
    isFetching,
    lastUpdated,
    async_data
  } = data_comp_sd_state || {
    isFetching: true,
    async_data: []
  }

  return {
    async_data,
    isFetching,
    lastUpdated
  }
}


export default connect(mapStateToProps)( RateGrid_stay );


