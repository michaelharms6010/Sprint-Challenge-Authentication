import React, {useState} from 'react';
import axios from 'axios'
import {Route, NavLink} from 'react-router-dom'
import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import JokesList from './components/JokesList'
import logo from './assets/logo.png'



function App(props) {
    
    const [user, setUser] = useState({
      username: "",
      password: "",
    })
    const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)
    const [userList, letUserList] = useState([])
    console.log("App.js user", user)

    const logout = _ => {
      localStorage.removeItem("token");
      setLogged(false)
    }

  return (
    <div className="app">
      <div className="navigation">
        <NavLink to = '/register'><button>Register</button></NavLink>
        { localStorage.getItem('token') ? <NavLink to = '/'><button onClick={logout}>Logout</button></NavLink> : <NavLink to = '/login'><button>Login</button></NavLink>}
        <NavLink to = '/jokeslist'><button>View Jokes</button></NavLink>
      </div>
      <Route path = '/register' component = {Register} />
      <Route path = '/login' render = {(props) => <Login {...props} setLogged={setLogged} />} />
      <Route path = '/jokeslist' render = {(props) => <JokesList {...props} user = {user} />} /> 
      <Route exact path = '/' render={() => 
      <div className="welcome"> 
        <NavLink to='/login'><img src={logo} /></NavLink>
      </div>
      } />

  </div>
  );
}

export default App;
