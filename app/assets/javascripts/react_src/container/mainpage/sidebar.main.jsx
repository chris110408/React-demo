import React from 'react';
import { Component } from 'react';
import MaterialTitlePanel from '../../components/sidebar/meterial_title_panel.jsx';
import SidebarContent from '../../components/sidebar/sidebar_content.jsx';
import Select from 'react-select'
import Sidebar from 'react-sidebar'
//dummydata list of .BoyiCompanyList
import DummyData from '../../../dummyData/index'
import {openSideBar,getuserhotels,get_current_hotel} from '../../actions/index.jsx'
import LeftNavContent from '../../components/sidebar/leftnav_content.jsx';
import {connect} from 'react-redux'
import Input from 'react-materialize/lib/Input';
import Row from 'react-materialize/lib/Row';
import Col from 'react-materialize/lib/Col';
const styles = {
    contentHeaderMenuLink: {
        textDecoration: 'none',
        color: 'white',
        padding: 8,
    },
    content: {
        padding: '16px',
    },
};

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}

const mystyles = {
    div: {
        float:'left'
    }

};

class SideBar extends Component{
    constructor(props){

        super(props);
        this.state={
            docked: false,
            transitions: true,
            touch: true,
            shadow: true,
            pullRight: false,
            touchHandleWidth: 0,
            dragToggleDistance: 30,
        }

        this.onSetOpen=this.onSetOpen.bind(this)
        this.menuButtonClick = this.menuButtonClick.bind(this)
    }

    componentWillMount(){
        this.props.getuserhotels('chris')
        this.props.get_current_hotel(this.props.params.hotelId)
    }


    onSetOpen(open) {
        this.props.openSideBar(open);
    };

    menuButtonClick(ev) {
        ev.preventDefault();
        console.log(this.props.isOpen)
        this.onSetOpen(!this.props.isOpen);
    };



    render() {
        const sidebar = <SidebarContent params={this.props.params}/>;


        const contentHeader = (
            <div>

                 <Row>
                     <Col s={1} className='grid-example'> {!this.state.docked &&
                    <a  onClick={this.menuButtonClick.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>}
                    </Col>
                     <Col s={7} className='grid-example'>
                     <Input s={7} type='select' label="博益酒店">
                         <option value='1'>酒店1</option>
                         <option value='2'>酒店2</option>
                         <option value='3'>酒店3</option>

                     </Input>
                         </Col>
                 </Row>

            </div>
           );

        const sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            sidebarClassName: 'custom-sidebar-class',
            touch: this.state.touch,
            shadow: this.state.shadow,
            pullRight: this.state.pullRight,
            touchHandleWidth: this.state.touchHandleWidth,
            dragToggleDistance: this.state.dragToggleDistance,
            transitions: this.state.transitions,
            onSetOpen: this.onSetOpen,

        };
        return (
            <div>
                <Sidebar {...sidebarProps} open = {this.props.isOpen}>
                    <MaterialTitlePanel nav={this.menuButtonClick.bind(this)} top={contentHeader}>

                    </MaterialTitlePanel>
                    {this.props.children}

                </Sidebar>
            </div>

        );
    };
};


function mapStateToProps(state){
    return {isOpen:state.sidebar_open,
        UserHotelsList:state.user_hotels
    }
}


export default connect(mapStateToProps,{openSideBar,getuserhotels,get_current_hotel})(SideBar);
