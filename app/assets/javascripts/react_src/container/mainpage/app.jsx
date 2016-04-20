
import React from 'react';
import { Component } from 'react';

import TopBar from './partial/topbar.main.jsx'
import DummyData from '../../../dummyData/index'

import Row from 'react-materialize/lib/Row';
import SideBar from './sidebar.main.jsx'

export default class AppMain1 extends Component{
    constructor(props){
        super(props)
    }




    render(){

        return (
            <div>


                <Row>
                    {this.props.children}
                </Row>
                <TopBar params=this.props.params/>
                <button>a</button>
            </div>
        )
    }

}