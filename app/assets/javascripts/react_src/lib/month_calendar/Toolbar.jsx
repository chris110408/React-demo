import React,{Component}from 'react';
import {Calendar} from 'calendar-base';


import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';




const _plus1=(value)=> value+1;

const _minus1=(value)=> value-1


 class ToolBar extends Component{

    constructor(props){
        super(props);
    }


       render(){


        const monthItems=()=>{

            return Array(12).fill(1).map((Month,id)=>{
                const newMonth = Month+ id

                return  <MenuItem key= {'tool-m-'+id} value={newMonth-1} primaryText={newMonth+'月'} />
            })

        }
        const yearItems=()=>{

            return  Array(20).fill(2005).map((year,id)=>{
                const newyear = year+id

                return  <MenuItem key= {'tool-y-'+newyear} value={newyear} primaryText={newyear+'年'} />


            })

        }
        const monthBottons=()=>{

                return  this.props.monthes.map((Month,id)=>{
                    return <FlatButton calssName="toolbar-small" key={'m' + id} label={Month} secondary={true} />

                })

        }

        const currentYear = this.props.currentDate.year();
        const currentMonth = this.props.currentDate.month()
        const currentDate = this.props.currentDate.format('YYYY-MM-DD')
        return (
            <Toolbar>

                    <ToolbarGroup firstChild={true} float="left">
                        <DropDownMenu value={currentYear} onChange={this.props.toobar_yearChange}>
                            {yearItems()}
                        </DropDownMenu>
                    </ToolbarGroup>
                    <ToolbarGroup firstChild={true} float="left">
                        <DropDownMenu value={currentMonth} onChange={this.props.toobar_MonthChange}>
                            {monthItems()}
                        </DropDownMenu>
                    </ToolbarGroup>



                    <ToolbarGroup float="right">
                        <ToolbarTitle text={currentDate} />
                        <IconMenu
                            iconButtonElement={
                              <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                              </IconButton>
                            }
                        >
                            <MenuItem primaryText="view1" />
                            <MenuItem primaryText="view2" />
                        </IconMenu>
                        <ToolbarSeparator />
                        <RaisedButton label="下一月" secondary={true} onClick={this.props.toobar_MohthButtonClick.bind(null,_plus1)}/>
                        <RaisedButton label="上一月" secondary={true} onClick={this.props.toobar_MohthButtonClick.bind(null,_minus1)}/>
                    </ToolbarGroup>
                </Toolbar>)



    }




}


export default ToolBar


//√ <div className="tool-bar" >
//    <RaisedButton calssName="toolbar-big" label="上个月" secondary={true} style={style} />
//    {monthBottons()}
//    <RaisedButton calssName="toolbar-big" label="下个月" secondary={true} style={style} />
//</div>

//const monthBottons=()=>{
//
//    return  this.props.monthes.map((Month,id)=>{
//        return <FlatButton calssName="toolbar-small" key={'m' + id} label={Month} secondary={true} />
//
//    })
//
//}