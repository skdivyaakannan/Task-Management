import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login';
import Task from './components/Task';
import Task2 from './components/Task2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login2 from './components/Login2';
import { useMediaQuery } from 'react-responsive';
import Signup2 from './components/signup2';




const App = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 601});
const isTabletOrMobileDevice = useMediaQuery({maxWidth: 600});
  return (
  
    <BrowserRouter>
   
      <Routes>
      {
             isDesktopOrLaptop ? <Route path="/" element={<Login />}/>: <Route path="/" element={<Login2 />}/>

        }
        {
             isDesktopOrLaptop ? <Route path='/signup' element={<Signup />}/> :<Route path='/signup'   element={<Signup2 />}/>
     

        }
        {/* <Route path="/" element={<Login />}></Route> */}
        
  
       
        { isDesktopOrLaptop ? <Route path="/task" element={<Task />}/>:<Route path="/task" element={<Task2 />}/>}
      
        
       
        
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App