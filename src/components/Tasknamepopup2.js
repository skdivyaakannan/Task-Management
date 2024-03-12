import React from 'react';
import './Tasknamepopup2.css';

function Tasknamepopup2(props) {
    
    
  return (props.trigger)?(
    <div className='Popup-1part'>
        <div className='Popup-inner-1part'>
            <div>
            
            <button   className='close-btn-2part' onClick={props.setTrigger} value="accept">Accept</button>
            <button className='close-btn-1part' onClick={props.setTrigger} value="Cancel" >Cancel</button>
            </div>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Tasknamepopup2;

