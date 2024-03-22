import React,{ useEffect, useState}from 'react'
import './Task.css';
import Popup from './Popup';
// import { BiDotsVerticalRounded } from "react-icons/bi";
import axios from 'axios';
import {useAuth} from './context.js'
import Taskcards from './Taskcards.js';
import "./Taskcards.css";
import {Link} from "react-router-dom"
import Taskheadings from './Taskheadings.js';



const Task = () => {

    const {user} = useAuth()
    const [taskname,setTaskName] = useState();
    const [taskdesc,setTaskDesc] = useState();
    const [taskassign,setTaskAssign] = useState();
    const [taskdetails,setTaskdetails]= useState([]);
    const [count,setCount] = useState([]);
    

    // console.log(user,"task")

    


   const [popup,setPopup] = useState(false);
   const [tname,setTname] = useState();
   const [val, setVal] = useState([])
   const [toggle ,setToggle] = useState(false);
   const [cond,setCond] =useState(false);

   const searchHandler = async()=>{
    setToggle(true);
    setCond(true)

    const result = await axios.get(`https://backend-code-tm.onrender.com/api/task/searchbar?taskname=${tname}`);
    console.log(result.data,"1111")
    setTaskdetails(result.data);
    console.log(val,"det")
   
  
    console.log(result.data);

    setTname('');
   }
   
const addtasks = async()=>{
   

    const details={
        taskname:taskname,
        taskassigned:[taskassign],
        taskdetails:taskdesc
    }
    

// const data = await axios.post(`http://localhost:8080/api/task/taskdata`,details);
const data = await axios.post(`https://backend-code-tm.onrender.com/api/task/taskdata`,details);
console.log(data,"data")

setTaskName('');
setTaskAssign('');
setTaskDesc('');


setPopup(false);



}
useEffect(()=>{
  const countHandler =async()=>{
    const res = await axios.get(`https://backend-code-tm.onrender.com/api/task/getstatuscount`);
    console.log(res.data,"111");
    setCount(res.data)
  }

  countHandler();
})

const closebutton=()=>{
  setPopup(false);
}
// useEffect(()=>{
//     const mytasks=async()=>{
//         const res = await axios.get(`http://localhost:8080/api/task/mytasks/?assigned=${user}`);
        
        
//         setTaskdetails(res.data)
//         console.log(taskdetails,"details")
//     }
//     mytasks()
    
// })

 const mytasksHandler=async()=>{
  setToggle(true);
  setCond(true);
      
            const res = await axios.get(`https://backend-code-tm.onrender.com/api/task/mytasks/?assigned=${user}`);
            
            
            setTaskdetails(res.data)
            console.log(taskdetails,"details")   
             
}
const homeHandler = () =>{
  setToggle(false)
  setCond(false)
}     
  return (
    <>
    <div className='header'>
        <h2 className='logo'>Task Tracker</h2>
        {cond == true?
         <button className='homebutton'  onClick={homeHandler}  >Home</button>:" "
        }
        <Link to='/'>
        <button className='logout'>Logout</button>
        </Link>
        

    </div>
    <hr className='hline'></hr>
    <div>
     <div className='midsec'> 
        <div className='left2'>
        <button  className='mytask' onClick={mytasksHandler} >My Tasks</button><br></br>
       
        <button onClick={()=>setPopup(true)}  className='addtask'>Add Tasks</button>
       
         </div>
         <Popup trigger={popup} setTrigger={addtasks} close={popup} setClose={closebutton}>
         <div className='addingtasks'>
            <h3 className='adtask'>ADD TASKS</h3>
            <div className='detail'>
            <div>
            <label form='taskname'>Taskname:</label>
            <input id='taskname' name='taskname' value={taskname} placeholder='Enter Taskname..' onChange={(e)=>setTaskName(e.target.value)}/><br></br>
            </div>
            <div className='taskdescription'>
            <label form='taskdesc'>TaskDescription:</label>
            <input id='taskdesc' name='taskdesc' value={taskdesc} placeholder='Enter TaskDescription..' onChange={(e)=>setTaskDesc(e.target.value)}/>
            </div>
            <div className='taskassigned'>
            <label form='taskassign'>TaskAssigned:</label>
            <input id='taskassign' name='taskassign' value={taskassign} placeholder='Enter TaskAssigned..' onChange={(e)=>setTaskAssign(e.target.value)}/>
            </div>
            </div>
        </div>
            </Popup>
            
  
        
      
      
         <div className='right'> 
         {toggle === true ? "" :
         <div className='home'>
       
          <div className='main'>
            
            
          <input className='searchbar' type='text' value={tname} placeholder='Search...' onChange={(e)=>setTname(e.target.value)}></input>
          <button className='search' onClick={searchHandler}>Search</button>
          </div>
         
         
          <div className='homecards'>
          <div className='card'>
          <div className='homedetail'>
          <h2  className='pend'>Pending</h2>
          <h2 className='hello'>{count.pendingCount}</h2>
          </div>
          </div>
          <div className='card'>
          <div className='homedetail'>
          <h2  className='pend'>Accepted</h2>
          <h2 className='hello'>{count.acceptCount}</h2>
          </div>
          </div>
          <div className='card'>
          <div className='homedetail'>
          <h2  className='pend'>cancelled</h2>
         <h2 className='hello'>{count.cancelCount}</h2>
          </div>
          </div>
          </div> 

          {/* end */}
         </div>
}
          {  toggle === true && taskdetails ? taskdetails.map((value,i)=>{
          
          return  (
            <>
           
          <Taskcards  mytask = { mytasksHandler} key={i} info={value}/>
        
         
            </>
          )
          
         }) : val.data?.map((value,i)=>{
          
            return  (
              <>
          
            <Taskcards  mytask = { mytasksHandler} key={i} info={value}/>
          
           
              </>
            )
            
           })
        }  
           
            
     </div> 
     </div>
    
  
   
      

     </div> 


    






    </>
  )
}

export default Task