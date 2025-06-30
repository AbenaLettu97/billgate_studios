import {React, useState} from "react";
import { NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { FaX } from "react-icons/fa6";
import Menu from "../Routes/Menu";


const Navbar = () => {
  const [active, setActive] = useState(true);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="flex m-0 bg-blue-900 text-white justify-between">
            <NavLink 
            className="m-4"
            to={"/"}>LOGO</NavLink>        
          <ul className="m-4">
            <NavLink className="flex"  onClick={showMenu}>{
              active ? <CiMenuFries size={30} /> : <Menu  className=''/>
            }</NavLink>
            
          </ul>
        
      </div>
    </>
  );
};

export default Navbar;
