import React from 'react';
import { IoClose } from "react-icons/io5";
import './Popup2.css';

function Popup2(props) {
  return (props.trigger)?(
    <div className='Popup'>

        <div className='Popup-inner'>
              <IoClose   className='cbutton' onClick={props.setClose}/>
            <button className='close-btn' onClick={props.setTrigger}>add Tasks</button>
            
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup2