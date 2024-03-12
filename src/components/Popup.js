import React from 'react';
import { IoClose } from "react-icons/io5";
import './Popup.css';

function Popup(props) {
  return (props.trigger)?(
    <div className='Popup'>

        <div className='Popup-inner'>
              <IoClose   className='cbutton' onClick={props.setClose}/>
            <button className='closebtn' onClick={props.setTrigger}>add Tasks</button>
            
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup