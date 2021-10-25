import React, { FC, useRef } from "react";

interface MenuButtonProps {
  open: boolean;
  onClick: Function;
}
export const MenuButton: FC<MenuButtonProps> = ({ open, onClick }) => {
  // setting up the references to the elements
  const menuBtnRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLDivElement | null>(null);

  if (open === null || open === undefined)
    return <p>Please provide a value for `open`</p>;

  return (
    <div
      className={`menu-btn ${open ? "open" : "close"}`}
      ref={menuBtnRef}
      onClick={() => onClick()}
    >
      <div className="menu-burger" ref={burgerRef}></div>
    </div>
  );
};
