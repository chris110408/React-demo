/**
 * Created by leichen on 4/8/16.
 */
import React from 'react';
import MaterialTitlePanel from './meterial_title_panel.jsx';

import { Link } from 'react-router'

const styles = {
    sidebar: {
        width: 256,
        height: '100%',
    },
    sidebarLink: {
        display: 'block',
        padding: '16px 0px',
        color: '#757575',
        textDecoration: 'none',
    },
    divider: {
        margin: '8px 0',
        height: 1,
        backgroundColor: '#757575',
    },
    content: {
        padding: '16px',
        height: '100%',
        backgroundColor: 'white',
    },
};

const SidebarContent = (props) => {








    const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

    const routelinks = [
        {
            link:"/",
            name:"calendar"
        },
                           {
                                link:"/rategrid",
                                name:"rate grid"
                            },{
                                 link:"/log",
                                 name:"log"
                            }
                        ];


    const links= routelinks.map((link,i)=> {
            let href=   `main/${props.params.hotelId}${link.link}`

            return <Link key={i}to={href}>
                <span  className="links" style={styles.sidebarLink}> {link.name}</span>
            </Link>
         }
        )



    return (
        <MaterialTitlePanel title="Menu" style={style}>
            <div style={styles.content}>
                <Link to={"/config"}>
                    <span  style={styles.sidebarLink}>Config</span>
                </Link>
                <Link to={"/config"}>
                     <span  style={styles.sidebarLink}>Log Out</span>
                </Link>
                <div style={styles.divider} />
                {links}
            </div>
        </MaterialTitlePanel>
    );
};

export default SidebarContent;