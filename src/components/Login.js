import React ,{useState} from 'react'
import { Link } from "react-router-dom";
import {useAuth } from './context.js'
import { useNavigate} from 'react-router-dom';

const Login = () => {

   const [lemail,setLmail] = useState();
   const [lpass,setLpass] = useState();
  const { Login } = useAuth();
  const navigate= useNavigate();
 
   

const signin = async()=>{


  let data ={};
  data = {
    email : lemail,
    password : lpass
  }
  console.log(data);
 const res = Login(data);
 if(res){
  navigate("/task")
 }
 
}


  return (
    <div>
        <div className='signup' >
        <h2 className='new'>Log in to your account</h2>
        <h4 className='info'>Welcome back!</h4>
      </div>
     
      <hr></hr>
     
      <div className='details'>
        
        <label className='mail'>Email</label><br></br>
        <input id='email' placeholder='Enter your email' onChange={(e)=>setLmail(e.target.value)}/><br></br>
        <label className='pd'>Password</label><br></br>
        <input id='password' placeholder='Enter your password' onChange={(e)=>setLpass(e.target.value)}/>
     
      <div>
        <button onClick={signin}  className='button'>login</button>
      </div>
     
      <div>
     
        <p className='memo'>Don't have an account?  <Link to="/Signup"><span className='create'>Create an account</span> </Link></p>
       
      </div>
      </div>
      
    </div>
  )
}

export default Login