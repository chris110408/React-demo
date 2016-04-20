/**
 * Created by leichen on 4/8/16.
 */
import React from 'react';

const styles = {
    root: {
        fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
        fontWeight: 300,
    },
    header: {
        backgroundColor: '#354052',
        color: 'white',
        padding: '18px',
        fontSize: '1.5em',
    },
    top:{
        backgroundColor: '#354052',
        color: 'white',
        fontSize: '1.5em',
    }
};
const TopOrTitle=(props)=>{


    return props.title? <div style={styles.header} className="PanelHeader">{props.title}</div>:<div style={styles.top} className="PanelTop">{props.top}</div>

}


const MaterialTitlePanel = (props) => {


    const rootStyle = props.style ? {...styles.root, ...props.style} : styles.root;

    return (
        <div style={rootStyle}>
            {TopOrTitle(props)}
            {props.children}
        </div>
    );
};

export default MaterialTitlePanel;