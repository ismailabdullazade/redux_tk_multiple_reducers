import React from 'react';
import { useDispatch } from 'react-redux';
import { login,logout } from '../features/User';



function Login() {

    const dispatch = useDispatch();
    
    return (
        <div>
            <button onClick={()=>{dispatch(login({name:"Ismail",age:"26",email:"ismailabdullazade715@gmail.com"}))}}>Login</button>
            <button onClick={()=>{dispatch(logout())}}>Logout</button>
        </div>
    );
}

export default Login;