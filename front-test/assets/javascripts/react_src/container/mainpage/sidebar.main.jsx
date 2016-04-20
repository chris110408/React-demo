import React from 'react';
import { Component } from 'react';
import Sidebar from 'react-sidebar'
import MaterialTitlePanel from '../../components/sidebar/meterial_title_panel.jsx';
import SidebarContent from '../../components/sidebar/sidebar_content.jsx';

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

class SideBar extends Component{
    constructor(props){

        super(props);
        this.state={
            docked: false,
            open: false,
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



    onSetOpen(open) {
        this.setState({open: open});
    };

    menuButtonClick(ev) {
        ev.preventDefault();
        this.onSetOpen(!this.state.open);
    };



    render() {
        const sidebar = <SidebarContent params={this.props.params}/>;
       console.log(this.props.params)
        const contentHeader = (
            <span>
        {!this.state.docked &&
        <a onClick={this.menuButtonClick.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>}
                <span> React Sidebar</span>
      </span>);

        const sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            sidebarClassName: 'custom-sidebar-class',
            open: this.state.open,
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
                <Sidebar {...sidebarProps}>
                    <MaterialTitlePanel title={contentHeader}>

                    </MaterialTitlePanel>
                    {this.props.children}

                </Sidebar>
            </div>

        );
    };
};

export default SideBar