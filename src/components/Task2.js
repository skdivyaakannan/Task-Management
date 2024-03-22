import React,{ useEffect, useState}from 'react'
import './Task2.css';
import Popup2 from './Popup2';
// import { BiDotsVerticalRounded } from "react-icons/bi";
import axios from 'axios';
import {useAuth} from './context.js'
import Taskcards2 from './Taskcards2.js';
import "./Taskcards2.css";
import {Link} from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";




const Task2 = () => {

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
   <div> 
<h2 className='logotitle'> Task Tracker</h2>

</div>
{cond ? 
  <section class="top-nav">
    
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
    
      {cond ? <li className='homebutton'  onClick={homeHandler} >Home</li> :""}
    
      
      <li className='logoutpart'>
        <Link to='/'>Logout</Link></li>
      
      
    </ul>
  </section>
  :  <Link to ='/' ><button className='logoutpart'>Logout</button></Link> }
    

     </div>
     

    


    
    

        {/* {cond == true?
         <button className='homebuttonpart'  onClick={homeHandler}  >Home</button>:" "
        }
        <Link to='/'>
        <button className='logoutpart'>Logout</button>
        </Link> */}
      
    <hr className='hlinepart'></hr>
    <div>
     <div className='midsecpart'> 
        <div className='leftpart'>
        <button  className='mytaskpart' onClick={mytasksHandler}  >My Tasks</button><br></br>
       
        <button onClick={()=>setPopup(true)}  className='addtaskpart'>Add Tasks</button>
       
         </div>
         <Popup2 trigger={popup} setTrigger={addtasks} close={popup} setClose={closebutton}>
         <div className='addingtaskspart'>
            <h3 className='adtaskpart'>ADD TASKS</h3>
            <div className='detailpart'>
            <div>
            <label form='tasknamepart'>Taskname:</label>
            <input id='tasknamepart' name='taskname' value={taskname} placeholder='Enter Taskname..' onChange={(e)=>setTaskName(e.target.value)}/><br></br>
            </div>
            <div className='taskdescription'>
            <label form='taskdescpart'>TaskDescription:</label>
            <input id='taskdescpart' name='taskdesc' value={taskdesc} placeholder='Enter TaskDescription..' onChange={(e)=>setTaskDesc(e.target.value)}/>
            </div>
            <div className='taskassignedpart'>
            <label form='taskassignpart'>TaskAssigned:</label>
            <input id='taskassignpart' name='taskassign' value={taskassign} placeholder='Enter TaskAssigned..' onChange={(e)=>setTaskAssign(e.target.value)}/>
            </div>
            </div>
        </div>
            </Popup2>
            
  
        
      
      
         <div className='rightpart'> 
         {toggle === true ? "" :
         <div className='homepart'>
       
          <div className='mainpart'>
            
            
          <input className='searchbarpart' type='text' value={tname} placeholder='Search...' onChange={(e)=>setTname(e.target.value)}></input>
          <button className='searchpart' onClick={searchHandler}>Search</button>
          </div>
         
         
          <div className='homecardspart'>
          <div className='cardpart'>
          <div className='homedetailpart'>
          <h2  className='pendpart'>Pending</h2>
          <h2 className='hellopart'>{count.pendingCount}</h2>
          </div>
          </div>
          <div className='cardpart'>
          <div className='homedetailpart'>
          <h2  className='pendpart'>Accepted</h2>
          <h2 className='hellopart'>{count.acceptCount}</h2>
          </div>
          </div>
          <div className='cardpart'>
          <div className='homedetailpart'>
          <h2  className='pendpart'>cancelled</h2>
         <h2 className='hellopart'>{count.cancelCount}</h2>
          </div>
          </div>
          </div> 

          {/* end */}
         </div>
}
          {  toggle === true && taskdetails ? taskdetails.map((value,i)=>{
          
          return  (
            <>
           
          <Taskcards2  mytask = { mytasksHandler} key={i} info={value}/>
        
         
            </>
          )
          
         }) : val.data?.map((value,i)=>{
          
            return  (
              <>
          
            <Taskcards2  mytask = { mytasksHandler} key={i} info={value}/>
          
           
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

export default Task2