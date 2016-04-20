
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux'



export default function(WrappedComponent){
    class Redirector extends Component{

        constructor(props){
            super(props)
        }

        static contextTypes={
            router:React.PropTypes.object
        }
        componentWillMount(){
           console.log("hi")
            const user = JSON.parse(sessionStorage.getItem("user"))


            if(user){
                console.log(user.HotelList)
                const hotelId= (user.HotelList)[0];
                if(user.payload.uname=='boyi' && user.payload.upassword == 'boyi' && hotelId){
                    this.context.router.push(`/main/${hotelId}`)
                }
                if(user.payload.uname=='admin' && user.payload.upassword == 'admin' && hotelId){
                    this.context.router.push('/admin')
                }
                
                //sessionStorage.removeItem('user');
            }else{

                this.context.router.push('/login')
            }




            //if(!this.props.authenticated){this.context.router.push('/login')}
        }



        render(){
            console.log(this.props.params)
            return (
                <WrappedComponent {...this.props}/>

            )
        }

    }

    function mapStateToProps(state){
        return {authenticated:state.authenticated}
    }

    return connect(mapStateToProps)(Redirector);
}

