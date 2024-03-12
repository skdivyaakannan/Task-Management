import React ,{useState} from 'react'
import { Link } from "react-router-dom";
import {useAuth } from './context.js'
import { useNavigate} from 'react-router-dom';
import './signup2.css';
const Login2 = () => {

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
     
      <div className='detailspart'>
        
        <label className='mailpart'>Email</label><br></br>
        <input id='emailpart' placeholder='Enter your email' onChange={(e)=>setLmail(e.target.value)}/><br></br>
        <label className='pdpart'>Password</label><br></br>
        <input id='passwordpart' placeholder='Enter your password' onChange={(e)=>setLpass(e.target.value)}/>
     
      <div>
        <button onClick={signin}  className='buttonpart'>login</button>
      </div>
     
      <div>
     
        <p className='memopart'>Don't have an account?<Link to="/Signup"><span className='create'> Create an account</span> </Link></p>
       
      </div>
      </div>
      
    </div>
  )
}

export default Login2