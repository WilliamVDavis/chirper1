import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Link, } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Home';
import Login from './Login';
import Feed from './Feed';

const User = (params)=> {
  return (<h1>Welcome User {params.username}</h1>)
}

function App() {
  return (
    <Router>
    <div className="App">
    
      <ul>
        <li>
 <Link to="/">Home</Link>
</li>
<li>
  <Link to="/Login">Login</Link>
</li>
<li>
<Link to="/Feed">Feed</Link>
</li>
  <Route path="/" exact component={Home}/>
  <Route path="/Login" exact component={Login}/>
  <Route path="/Feed" exact component={Feed}/>
 
   {/* <Route path="/user:username" exact strict render={({match})=>(
    this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/'/>)
  )}/> */}

  </ul>
</div>
    </Router>
  );
}

export default App;