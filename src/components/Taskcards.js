import React,{useState} from 'react'
import "./Taskcards.css";
import Tasknamepopup from './Tasknamepopup'
import axios from 'axios'
import { MdDeleteOutline } from "react-icons/md";
import {useAuth} from './context.js'
import Taskheadings from './Taskheadings.js';



const Taskcards = (props) => {

  const [tasknamepopup,setTasknamepopup] = useState(false);
 
  const {user} = useAuth()
  
  const taskname = async(e)=>{
   console.log(props.info._id,"idd")
   console.log(e.target.value)
   
   let update = {

   };
    update = { 
      task_uuid : props.info.task_uuid,
      taskstatus: e.target.value
    }
    console.log(update,"22222")
   
   const statusupdate =   await axios.post(`https://backend-code-tm.onrender.com/api/task/statusUpdate`,update);
  console.log(statusupdate,"11111");
  props.mytask();

  

   
    setTasknamepopup(false);
  }

  const deleteHandler=async()=>{

  
  let task_uuid=props.info.task_uuid;

 console.log(task_uuid)
 

const deletedata = await axios.delete(`https://backend-code-tm.onrender.com/api/task/taskdelete/${task_uuid}`);
  console.log(deletedata);
  props.mytask();
 }

 const date = new Date(props.info.createdAt).toDateString('en')
 
console.log(date);


  return (

    <>
            
           
      
    <div className='cardspage'>
        <h2 className='tnames' onClick={()=>setTasknamepopup(true)}>{props.info.taskname}</h2>
        <h2 >{props.info.taskassigned}</h2>
        <h2>{date}</h2> 
        <h2 >{props.info.taskstatus}</h2>
        <h2 onClick={deleteHandler} className='delicon'><MdDeleteOutline /></h2>

    </div>  
   
    
     <Tasknamepopup trigger={tasknamepopup} setTrigger={taskname}>
      
       <div className='mainpop'>
            <div className='name1'>
              <h1 className='ans11'> Task Name: </h1>
              <h2 className='ans1'>{props.info.taskname}</h2>
            </div>
            <div className='desc1'>
            <h1 className='ans22'> Task Description: </h1>
              <h2 className='ans2'>{props.info.taskdetails}</h2>
            </div>
        
       </div>
      
      
    </Tasknamepopup> 
  
    </>

   )
}

export default Taskcards