import React, { useRef } from "react";

export default function MenuButton(props) {
    // setting up the references to the elements
    const menuBtnRef = useRef();
    const burgerRef = useRef();

    if (props.open === null || props.open === undefined)
        return <p>Please provide a value for `open`</p>;

    return (
        <div
            className={`menu-btn ${props.open ? "open" : "close"}`}
            ref={menuBtnRef}
            onClick={() => props.onClick()}
        >
            <div className="menu-burger" ref={burgerRef}></div>
        </div>
    );
}
