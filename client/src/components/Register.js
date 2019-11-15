import React, {useState} from 'react';
import axios from 'axios'
import {Route, NavLink} from 'react-router-dom'

function Register(props) {

    

    const [user, setUser] = useState({
      username: "",
      password: "",
    })
    const [userList, letUserList] = useState([])

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {username, password} = user;
        axios.post('http://localhost:3300/api/auth/register', user)
        .then(res => {
            console.log("register post response" , res);
            props.history.push('/');
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            placeholder="username"
            value={user.username}
            name="username"
        />
        <input
            onChange={handleChange}
            placeholder="password"
            value={user.password}
            name="password"
            type="password"
        />
        <button type="submit">Register</button> 
    </form>
    );
}

export default Register;
