
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux'


export default function(WrappedComponent){
    class HotelList extends Component{
        static contextTypes={
            router:React.PropTypes.object
        }
        componentWillMount(){

            const hotelId=this.props.params.hotelId

            const user = JSON.parse(sessionStorage.getItem("user"))

            const res= user.HotelList.reduce((all,item)=>{

                if(item==hotelId){
                    return all+1
                }
                return all
            },0);
            if(res == 0){
                this.context.router.push(`/main/${user.HotelList[0]}`)
            }



        }
        componentWillUpdate(nextProps){
            const hotelId=nextProps.params.hotelId

            const user = JSON.parse(sessionStorage.getItem("user"))

            const res= user.HotelList.reduce((all,item)=>{

                if(item==hotelId){
                    return all+1
                }
                return all
            },0);
            if(res == 0){
                this.context.router.push(`/main/${user.HotelList[0]}`)
            }
        }



        render(){
            return (
                <WrappedComponent {...this.props}/>

            )
        }

    }



    return HotelList;
}

