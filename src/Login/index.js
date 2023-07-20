import React, {useState} from "react";
import { Link } from "react-router-dom";

import './style.css'



const Login = ()=>{
    const [username, setUsername]= useState('');

    const [password, setPassword] = useState('');




const handleSubmit = async(d) => {
    d.preventDefault();

    const data = {
        username : username,
        password:password
    }



try{
    const response = await fetch('https://dummyjson.com/auth/login',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),

    })
    const result = await response.json();
}
catch(error){
}



}
   
    return(
        <div>
          <form className="form" onSubmit={handleSubmit}> 
            <h1>Login</h1>
            <input placeholder="Enter username" type="text" required
            onChange={(d) =>{setUsername(d.target.value)}}
            />
            <br/>
            <br/>
            <input className="password" placeholder="Enter password" type="password" required
            onChange={(d) =>{setPassword(d.target.value)}}
            />
            <br/>
            <br/>
            < Link to= {'/Products'}>

            <button type="submit" className="submit">Log In</button>
            </Link>
          </form>
        </div>
    );
};


export default Login;