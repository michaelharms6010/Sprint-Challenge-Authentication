import React, {useState} from 'react';
import {Route, NavLink} from 'react-router-dom'
import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import JokesList from './components/JokesList'
import logo from './assets/logo.png'



function App(props) {
    
    const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)


    const logout = _ => {
      localStorage.removeItem("token");
      setLogged(false)
    }

  return (
    <div className="app">
      <div className="navigation">
        { logged ? null : <NavLink to = '/register'><button>Register</button></NavLink>}
        { logged ? <NavLink to = '/'><button onClick={logout}>Logout</button></NavLink> : <NavLink to = '/login'><button>Login</button></NavLink>}
        <NavLink to = '/jokeslist'><button>View Jokes</button></NavLink>
      </div>
      <Route path = '/register' component = {Register} />
      <Route path = '/login' render = {(props) => <Login {...props} setLogged={setLogged} />} />
      <Route path = '/jokeslist' render = {(props) => <JokesList {...props} />} /> 
      <Route exact path = '/' render={() => 
      <div className="welcome"> 
        <NavLink to='/login'><img alt="logo of a lock in a hand" src={logo} /></NavLink>
      </div>
      } />

  </div>
  );
}

export default App;
