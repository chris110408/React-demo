import React,{Component}from 'react';


const defaultProps = {
    daysOfTheWeek: [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
    ],
};




class Header extends Component {



    render() {
        const Items = this.props.daysOfTheWeek.map((el, index)=> {
            return <div className="mc-col"
                        key={'header_'+index}>
                {el}
            </div>
        })

        return <div className="mc-row mc-header">{Items}</div>


    }
}

Header.defaultProps = defaultProps;

export default Header;