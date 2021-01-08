import React from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css'
import {Redirect} from 'react-router-dom';
import Home from './Home';

toast.configure();
//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class UserLogin extends React.Component{
    
     state = {
        submitted:false,
        userid: null,
    }

    handleSubmit(event){
        event.preventDefault();

 const data={
     email:this.email,
     password:this.password
    }

axios.post(`http://localhost:8080/omar-app-ws/users/login`,data)
.then((response) =>
   {
       if(response.status === 200) {
        //toast("Logged Succesfully", {autoClose:3000,position:toast.POSITION.TOP_CENTER});
        let newUserId = response.headers.userid;
        this.setState({userid:newUserId,
            submitted:true});
       }
       
   },this)
   .catch((error) =>{
    toast("User Not Authenticated", {autoClose:3000,position:toast.POSITION.TOP_CENTER});
   })
              
}
    
    render(){
        let redirect = null;
        if(this.state.submitted){
           redirect = <Redirect to= {"/home/"+this.state.userid} />;
        }
        return(<div className="UserLogin" >
            {redirect}
            <h2>User Login</h2>
            Email:<input type="text" name='email' onChange={(event)=>{this.email=event.target.value}}></input>
            Password:<input type="password" name='password' onChange={(event)=>{this.password=event.target.value}}></input>
            <button onClick={this.handleSubmit.bind(this)}>Log In</button>
                   

        </div>)
    }
}

export default UserLogin;