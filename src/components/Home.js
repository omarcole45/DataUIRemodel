import React from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
//
import UserLogin from './UserLogin';

let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaXJfbWFuX2pAeWFob28uY29tIiwiZXhwIjoxNjEwNTIyNDg0fQ.4y-UzsOeEJwIgohfe4X-NEFLfJrlwq5qekYzPk_fnOViJPPn_TlHJ8q-HepDEZdPdL4A_amwmHCDYZyBNUiLDw';
//UserLogin.state.token;

let headers = {
  Authorization: "Bearer " + token,
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json"
};
class Home extends React.Component{

    state = {
        userData:[]
    }
 
    componentWillMount(){
        axios.get("http://localhost:8080/omar-app-ws/users/"+this.props.match.params.userid, { headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          }
        }).then(
            res=>{
              this.setState(res.data);
            })
    }
    render(){
        return(<div>
            <h2>Welcome {this.state.firstName} {this.state.lastName}</h2>
             <div>First Name: {this.state.firstName}</div>
             <div>Last Name: {this.state.lastName}</div> 
             <div>Email: {this.state.email}</div>
        </div>)
    }
}

export default Home;