import React,{useState} from 'react'
import "./Taskcards2.css";
import Tasknamepopup2 from './Tasknamepopup2'
import axios from 'axios'
import { MdDeleteOutline } from "react-icons/md";
import {useAuth} from './context.js'
import Taskheadings from './Taskheadings.js';



const Taskcards2 = (props) => {

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
   
   const statusupdate =   await axios.post(`http://localhost:8080/api/task/statusUpdate`,update);
  console.log(statusupdate,"11111");
  props.mytask();

  

   
    setTasknamepopup(false);
  }

  const deleteHandler=async()=>{

  
  let task_uuid=props.info.task_uuid;

 console.log(task_uuid)
 

const deletedata = await axios.delete(`http://localhost:8080/api/task/taskdelete/${task_uuid}`);
  console.log(deletedata);
  props.mytask();
 }

 const date = new Date(props.info.createdAt).toDateString('en')
 
console.log(date);


  return (

    <>
            
           
      
    {/* <div className='cardspart'> */}
    
    
      <div className='cardspart2'>
      <h2 onClick={deleteHandler} className='deliconpart'><MdDeleteOutline /></h2>
      <div className='carddetpart'>
      <div className='del1'>
      <h2 className='names'>TaskName:</h2>
      <h2 className='ans' onClick={()=>setTasknamepopup(true)}>{props.info.taskname}</h2>
      </div>
      <div className='del1'>
      <h2 className='names'>TaskAssigned:</h2>
      <h2 className='ans'>{props.info.taskassigned}</h2>
      </div>
      <div className='del1'>
      <h2 className='names'>Date:</h2>
      <h2 className='ans'>{date}</h2> 
      </div>
      <div className='del1'>
      <h2 className='names' >Status:</h2>
      <h2 className='ans'>{props.info.taskstatus}</h2> 
      </div>
      </div>
    
    </div>

   
    
     <Tasknamepopup2 trigger={tasknamepopup} setTrigger={taskname}>
      {/* <div className='detpart'>
        <div className='pop1part'>
      <h2 className='pop11part'>TaskName:</h2>
      <h1 className='taskname-1part'>{props.info.taskname}</h1>
      </div>
      <div className='pop2part'>
      <h2 >Task Description:</h2>
      <h3 className='desc-1part'>{props.info.taskdetails}</h3>
      </div>
      <div className='pop3part'>
      <h2>Do you need this task?</h2>
      </div>
      </div> */}
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
      
      
      
    </Tasknamepopup2> 
  
    </>

   )
}

export default Taskcards2