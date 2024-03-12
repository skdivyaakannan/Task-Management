import React , {useState} from 'react'
import './signup2.css'
import axios from "axios"
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

const Signup2 = () => {

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
  const result = await axios.post("http://localhost:8080/api/user/register",userdata)
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
     
      <div className='detailspart'>
        <label className='unpart'>Username</label><br></br>
        <input id='usernamepart' placeholder='Enter your name' onChange={(e)=>setSname(e.target.value)}/><br></br>
        <label className='mailpart'>Email</label><br></br>
        <input id='emailpart' placeholder='Enter your email' onChange={(e)=>setSmail(e.target.value)}/><br></br>
        <label className='pdpart'>Password</label><br></br>
        <input id='passwordpart' placeholder='Enter your password' onChange={(e)=>setSpass(e.target.value)} />
     
      <div>
        <button onClick={register} className='buttonpart'>Signup</button>
      </div>
     
      <div>
        <p className='mempart'><Link to="/">Already a member? Signin</Link></p>
      </div>
      </div>
     
    </div>
  )
}

export default Signup2