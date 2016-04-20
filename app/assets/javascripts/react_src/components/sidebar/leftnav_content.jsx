import React from 'react';
import MaterialTitlePanel from './meterial_title_panel.jsx';
import Divider from 'material-ui/lib/divider';
import { Link } from 'react-router';
import MenuItem from 'material-ui/lib/menus/menu-item';


const LeftNavContent = (props) => {


   let routelinks = props.link



    const links= routelinks.map((link,i)=> {
            let href=   `main/${props.params.hotelId}${link.link}`

            return <Link key={i}to={href}>
                <MenuItem  className="links"> {link.name}</MenuItem>
            </Link>
        }
    )


    const removeSession =() =>sessionStorage.removeItem('user');


    return (
        //侧边栏标题在 MaterialTitlePanel title 设置 ，第一个第二个链接基本不会改动在本模块设置，其余链接在app.main-LeftNavlinks 设置
        <MaterialTitlePanel title="目录" >
            <div >
                <Link to={"/config"}>
                    <MenuItem >设置</MenuItem>
                </Link>
                <Link onClick= {removeSession.bind(this)} to={"/login"}>
                    <MenuItem>登出</MenuItem>
                </Link>
                <Divider/>
                {links}
            </div>
        </MaterialTitlePanel>
    );
};

export default LeftNavContent;