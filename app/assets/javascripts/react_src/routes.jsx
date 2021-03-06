import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SideBar from './container/mainpage/sidebar.main.jsx';
import reducers from './reducers';
import {Route,IndexRoute} from 'react-router';
import Calendar from './container/calendar/calendar.main.jsx'

import RateGrid from './container/rategrid/rategrid.jsx'
import RateGrid_cap from './container/rategrid_cap/rategrid_cap.jsx'
import RateGrid_stay from './container/rategrid_stay/rategrid_stay.jsx'
import Log from './container/log/log.main.jsx'
import OverView from './container/OverView/OverView.jsx'
import AppConfig from './container/appconfig/config.main.jsx'
import AuthWrap from './HOF/require_auth.jsx'
import HotelList from './HOF/hotellist.jsx'
import Redirect from './HOF/redirector.jsx'
import Login from './container/login/login.main.jsx'
import Admin from './container/admin/admin.main.jsx'
import AppMain from './container/mainpage/app.main.jsx'

const Main = (props) => {




    return (
        <div>
            <h1>hello</h1>
            {props.children}
        </div>
    );
};


export default (
   <div>
        <Route path="/" component = {Redirect(Main)}/>
        <Route path="main/:hotelId" component = {AppMain}>
            <IndexRoute component={Calendar}/>
            <Route path = "rategrid" component ={RateGrid}/>
            <Route path = "log" component ={Log}/>
            <Route path = "overview" component ={OverView}/>
            <Route path = "rategrid_cap" component ={RateGrid_cap}/>
            <Route path = "rategrid_stay" component ={RateGrid_stay}/>
        </Route>
       <Route path="/config" component = {AppConfig}>
       </Route>
       <Route path="/login" component = {Login}/>
       <Route path="/admin" component = {Admin}/>


   </div>


)