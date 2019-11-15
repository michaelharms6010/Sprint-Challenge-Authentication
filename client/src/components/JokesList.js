import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth"

function JokesList() {

    const [jokesList, setJokesList] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:3300/api/jokes')
        .then(res => {
            console.log("users post response" , res);
            setJokesList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);




    

  return (
    <div>
        {(jokesList.length > 0 )
        ? jokesList.map(joke => 
            <div key={joke.id} className="joke-card">
                <h2>{joke.joke}</h2>
            </div>    
        
        ): localStorage.getItem('token') 
        ? <h1>Loading....</h1>
        : <h1>Jokes on you! You need to log in!</h1>
    }

    </div>
    
    );
}

export default JokesList;