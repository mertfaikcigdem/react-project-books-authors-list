import React from 'react';
import "./Popup.css";
import { AiOutlineClose } from 'react-icons/ai';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}><AiOutlineClose /></button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
