import React from 'react';
import './Tasknamepopup.css';

function Tasknamepopup(props) {
    
    
  return (props.trigger)?(
    <div className='Popup-1'>
        <div className='Popup-inner-1'>
            <div className='acbuttons'>
            
            <button   className='close-btn-2' onClick={props.setTrigger} value="accept">Accept</button>
            <button className='close-btn-1' onClick={props.setTrigger} value="Cancel" >Cancel</button>
            </div>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Tasknamepopup;

