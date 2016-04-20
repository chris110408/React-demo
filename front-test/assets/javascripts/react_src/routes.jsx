import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SideBar from './container/mainpage/sidebar.main.jsx';
import reducers from './reducers';
import {Route,IndexRoute} from 'react-router';
import Calendar from './container/calendar/calendar.main.jsx'

import RateGrid from './container/rategrid/rategrid.jsx'
import Log from './container/log/log.main.jsx'
import AppConfig from './container/appconfig/config.main.jsx'
import AuthWrap from './HOF/require_auth.jsx'
import HotelList from './HOF/hotellist.jsx'
import Redirect from './HOF/redirector.jsx'
import Login from './container/login/login.main.jsx'
import Admin from './container/admin/admin.main.jsx'


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
        <Route path="/" component = {Redirect(Main)}></Route>
        <Route path="main/:hotelId" component = {SideBar}>
            <IndexRoute component={Calendar}/>
            <Route path = "rategrid" component ={RateGrid}/>
            <Route path = "log" component ={Log}/>
        </Route>
       <Route path="/config" component = {AppConfig}>
       </Route>
       <Route path="/login" component = {Login}></Route>
       <Route path="/admin" component = {Admin}></Route>


   </div>


)