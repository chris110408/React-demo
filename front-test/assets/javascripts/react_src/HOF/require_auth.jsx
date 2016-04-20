
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux'


export default function(WrappedComponent){
    class Authentication extends Component{
        static contextTypes={
            router:React.PropTypes.object
        }
        componentWillMount(){
            console.log(this.props.authenticated)
            if(!this.props.authenticated){this.context.router.push('/login')}
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.push('/login')
            }
        }

        render(){
            return (
                <WrappedComponent {...this.props}/>

            )
        }

    }

    function mapStateToProps(state){
        return {authenticated:state.authenticated}
    }

    return connect(mapStateToProps)(Authentication);
}

