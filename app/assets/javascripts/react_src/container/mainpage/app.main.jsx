

import React from 'react';
import { Component } from 'react';



import TopBar from './partial/topbar.main.jsx'
import DummyData from '../../../dummyData/index'
import ThemeManager from 'material-ui/lib/styles/theme-manager';



// leftNav 属性   ------
const LeftNavConfig={
    docked:false,
    width:80
}



const LeftNavlinks = [
    {
        link:"/",
        name:"日历"
    },
    {
        link:"/rategrid",
        name:"价格"
    },{
        link:"/log",
        name:"目录"
    },{
        link:"/overview",
        name:"汇总"
    }
];

const LeftNavProps= {
    config:LeftNavConfig,
    link:LeftNavlinks
}
//   ------   leftNav 属性





export default class AppMain extends Component{
    constructor(props){
        super(props)
    }




    render(){

        return (
            <div>
                <TopBar leftNav={LeftNavProps} params={this.props.params} />

                {this.props.children}

            </div>
        )
    }

}