



var React = require('react');
var ReactDOM = require('react-dom');
var Griddle = require('griddle-react');



const Table =(props)=>{

    let columnname=Object.keys(props.data[0]).map((i)=>i)

    return <Griddle results={props.data} tableClassName="table"
                    showSettings={true} columns={columnname}
                    resultsPerPage={30}
                    customRowComponentClassName={"custom-row"}


                    nextText="下一页"
                    PreviousText="上一页"

                    settingsText="设置 "

                    useGriddleStyles={false}
                    enableSort={true}
                    showFilter={false}

    />
}




export default Table;





