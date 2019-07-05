import React, { Component } from 'react';
import './App.css';

class Login extends Component{
    state = {
      loggedIn: false
    }
    loginHandle = ()=> {
      this.setState({loggedIn:true})
    }
render(){
    return (
        <div>
            <h1>Chirper Login</h1>
            <form>
  <div class="form group">
    <label for="InputUsername">
  Username</label>
  <input type="text" name="username" placeholder="Enter username"></input>
  </div>
  <div class="form group">
  <label for="InputPassword">
    Password </label>
  <input type="text" name="password" placeholder="Enter password"></input>
  </div>
</form>
<input type="button" value="Log in" onClick={this.loginHandle.bind(this)}/>
 </div>
    )
}
}

export default Login;