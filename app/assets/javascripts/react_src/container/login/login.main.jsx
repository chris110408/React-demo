
import React,{ Component , PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import {loginPost,authenticate} from '../../actions/index.jsx'
import {Link} from 'react-router'

class Login extends Component {

    static contextTypes = {
        router : PropTypes.object
    };

    onSubmit(props){
       let {payload} = this.props.loginPost(props)
            //.then(()=>{
            //    this.context.router.push('/')
            //})
        if(payload.uname=='boyi' && payload.upassword == 'boyi'){


            let HotelList=['8001','8002','8003']

            this.props.authenticate(true);
            sessionStorage.setItem("user", JSON.stringify({
                payload,HotelList
            }));
            this.context.router.push('/')
        }

        if(payload.uname=='admin' && payload.upassword == 'admin'){



            this.props.authenticate(true);
            sessionStorage.setItem("user", JSON.stringify({
                payload
            }));
            this.context.router.push('/admin')
        }


    }

    render(){
        const {fields:{uname,upassword},handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>User Login</h3>
                <div className={`form-group ${uname.touched && uname.invalid ? 'has-danger':''}`}>
                    <label>User Name</label>
                    <input type="text" className ="form-control" {...uname}/>
                    <div className="text-help">
                        {uname.touched?uname.error:''}
                    </div>
                </div>

                <div className={`form-group ${upassword.touched && upassword.invalid ? 'has-danger':''}`}>
                    <label>Password</label>
                    <input type="text" className ="form-control" {...upassword}/>
                    <div className="text-help">
                        {upassword.touched?upassword.error:''}
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Login</button>
                <Link to = "/" className = "btn btn-danger">Cancel</Link>
            </form>
        )}

}

function validate(values){
    let errors = {};
    if(!values.uname){
        errors.uname= 'enter username'
       }


    if(!values.upassword){
        errors.upassword= 'enter password'
    }else {
        if (values.upassword.length < 3) {
            errors.upassword = 'password length'
         }
    }

    return errors;
}

function mapStateToProps(state){
    return {authenticated:state.authenticated}
}

export default  reduxForm({
    form : 'postNewForm',
    fields:['uname','upassword'],
    validate
},mapStateToProps,{loginPost,authenticate})(Login);
