import React , {useState} from 'react'
import './Signup.css';
import axios from "axios"
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';


const Signup = () => {

const [sname,setSname] = useState();
const [smail,setSmail] = useState();
const [spass,setSpass] = useState();
const navigate= useNavigate();


const register = async()=>{
  let userdata = {};
  userdata = {
    username : sname,
    email: smail,
    password: spass

  }
  console.log(userdata);
  // const result = await axios.post("http://localhost:8080/api/user/register",userdata)
  const result = await axios.post("https://backend-code-tm.onrender.com/api/user/register",userdata)
  console.log(result)
  
  if(result)
  alert("register succesfully");
  navigate("/")
  
}


  return (
     <div>
      <div className='signup' >
        <h2 className='new'>Create a new account</h2>
        <h4 className='info'>Enter your details to register</h4>
      </div>
     
      <hr></hr>
     
      <div className='details'>
        <label className='un'>Username</label><br></br>
        <input id='username' placeholder='Enter your name' onChange={(e)=>setSname(e.target.value)}/><br></br>
        <label className='mail'>Email</label><br></br>
        <input id='email' placeholder='Enter your email' onChange={(e)=>setSmail(e.target.value)}/><br></br>
        <label className='pd'>Password</label><br></br>
        <input id='password' placeholder='Enter your password' onChange={(e)=>setSpass(e.target.value)} />
     
      <div>
        <button onClick={register} className='button'>Signup</button>
      </div>
     
      <div>
        <p className='mem'><Link to="/">Already a member? Signin</Link></p>
      </div>
      </div>
      
      
    </div>
  )
}

export default Signup