import React from "react";
import { ReactComponent as CloseIcon } from "../icons/close.svg";

export default Alert = (props) => {
    const handleClick = () => {
        props.setActive(false);
    }

    return (
        <div
            className={`custom-alert custom-alert-${props.type} ${
                props.active ? "alert-active" : "alert-inactive"
            }`}
        >
            <p>{props.text}</p>
            <CloseIcon onClick={() => handleClick()} className="close-icon" />
        </div>
    );
}
