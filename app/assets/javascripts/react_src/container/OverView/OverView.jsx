const React = require('react');
const {Table, Column, Cell} = require('fixed-data-table');
import CsvDownloader from 'react-csv-downloader';
import Card from 'material-ui/lib/card/card';
import dummy from '../../../dummyData/index'
import Paper from 'material-ui/lib/paper';
import {connect} from 'react-redux'
import {get_hotel_data,get_comp_data} from '../../actions/index.jsx'
import PriceChart from './PriceChart.jsx'
import PriceTable from './PriceTable.jsx'



import {getPrice,isNothing} from './model'

const styles = {
    head: {
        height: '56px',
        backgroundColor: '#E8E8E8',
        padding:'8px'
    },
    paper: {
        padding: '16px',
        margin: 60,
        fontSize: '1.5rem !important',
        textAlign: 'center'

    },
    paperleft: {
        padding: '16px',

        marginTop: 30,
        marginRight: '30px',
        float:'left'
    },
    paperright: {
        padding: '16px',
        marginTop: 30,
        float:'left'
    },
    content: {
        padding: '16px',
        height: '100%',
        backgroundColor: 'white',
    },
};


class OverView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        let hotelId= this.props.params.hotelId;

        this.props.get_hotel_data(hotelId);
        this.props.get_comp_data(hotelId);
    }





    render() {
        const PriceData = this.props.state;

        const useForTablePrices=getPrice(this.props.state)

        return (

            <Paper style={styles.paper} zDepth={1}>
                <Card >

                    <h2 style={styles.head}>汇总</h2>
                    <PriceChart PriceData={PriceData}/>
                </Card>
                <Paper style={styles. paperleft}>
                    <Card >

                        <h2 style={styles.head}>hotel price</h2>
                        <PriceTable className = "lo-pricetable" PriceData={useForTablePrices.hotel} />
                    </Card>
                </Paper>
                <Paper style={styles. paperright}>
                    <Card >

                        <h2 style={styles.head}>Comp price</h2>
                        <PriceTable className = "lo-pricetable" PriceData={useForTablePrices.comp} />
                    </Card>
                </Paper>
            </Paper>
        );
    }
}


function mapStateToProps(state){
    return {state:state.overview_state
    }
}



export default connect(mapStateToProps,{get_hotel_data,get_comp_data})(   OverView );

