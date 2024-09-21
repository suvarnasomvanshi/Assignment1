import React from "react";
import logo from "../../public/images/logo.png";
import { Button } from "react-bootstrap";
import BreadCrumbs from "./Dropdown";

const Navbar = () => {
  const navEle = [
    "Pricing",
    "Solutions",
    "Community",
    "Resources",
    "Pricing",
    "Contact",
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center px-0 px-md-4  " style={{height:"60px"}}>

        <img src={logo} alt="logo" style={{ height: "30px", width: "25px" }} className="d-none d-md-block" />

        <div className="d-block d-sm-block d-md-none">
            <BreadCrumbs navEle={navEle}/>
        </div>

        <div className="d-flex align-items-center ">
        <div className="d-flex d-none d-md-block ">
        {navEle.map((ele,index) => (
            <span key={index} className="mx-1">{ele}</span>
          ))}
        </div>
          
          <div className="d-flex ms-3 gap-2">
            <Button className="bg-secondary border border-dark">Sign in</Button>
            <Button className="bg-dark border border-dark">Register</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
