import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import {connect} from 'react-redux'
import {openSideBar,getuserhotels,get_current_hotel} from '../../../actions/index.jsx'
import LeftNavContent from '../../../components/sidebar/leftnav_content.jsx';

import { Link } from 'react-router';
import Input from 'react-materialize/lib/Input';
import Row from 'react-materialize/lib/Row';
import Col from 'react-materialize/lib/Col';
import Icon from 'react-materialize/lib/Icon'
class TopBar extends  React.Component
{
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle= this.handleToggle.bind(this);
    }


    handleToggle = () =>{
        console.log('hi')
        let open = this.props.isOpen
        this.props.openSideBar(!open);
    }


    //componentWillMount(){
    //    this.props.getuserhotels('chris')
    //    this.props.get_current_hotel(this.props.params.hotelId)
    //}


    getCurrenthotelName(){
        let currentHotel=this.props.UserHotelsList.current
        let currentHotelName;
        currentHotelName='Loading....'
        if(currentHotel){
            currentHotelName=currentHotel.name
        }
        return currentHotelName
    }


    changeCurrentHotel(id){
        this.props.get_current_hotel(id);
    }
    //getCurrentHotelList(){
    //    let lists=this.props.UserHotelsList.all
    //    let currentHotel=this.props.params.hotelId
    //    let Hotellinks;
    //    if(lists) {
    //        Hotellinks = lists.filter(i=>i.id != currentHotel).map((link)=> {
    //                let href = `main/${link.id}`
    //                let id = link.id
    //                return <Link key={id} to={href} onClick={this.changeCurrentHotel.bind(this,id)} value='1'>
    //                    <MenuItem className="links"> {link.name}</MenuItem>
    //                </Link>
    //            }
    //        )
    //    }
    //    return Hotellinks
    //}


    menuButtonClick(ev) {

        console.log(this.props.isOpen)
        this.onSetOpen(!this.props.isOpen);
    };

    render()
    {
        //let leftnavConfig = this.props.leftNav.config
        //let leftnavLink = this.props.leftNav.link



        return (

                <div>
                    <button onClick={()=>console.log(0)}>ss</button>

                    <Row>
                        <Col s={1}>
                        <button
                            onClick={this.menuButtonClick.bind(this)}
                            >
                            =
                        </button>
                        </Col>
                        <Col s={7}>
                            <Input s={7} type='select' label="博益酒店" value='1'>
                                <option value='1'>酒店1</option>
                                <option value='2'>酒店2</option>
                                <option value='3'>酒店3</option>

                            </Input>
                        </Col>
                    </Row>

                </div>



        )

    }

}


function mapStateToProps(state){
    return {isOpen:state.sidebar_open,
        UserHotelsList:state.user_hotels
    }
}


export default connect(mapStateToProps,{openSideBar,getuserhotels,get_current_hotel})(TopBar);
