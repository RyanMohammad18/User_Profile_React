import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlUserFemale } from "react-icons/sl";

import { faBars, faBell as farBell } from "@fortawesome/free-solid-svg-icons";

const iconStyle = {
  "margin-right": 20,
};

function App() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <FontAwesomeIcon icon={faBars} className="fabars" />
          </div>
          <div className="profile">
            <HiOutlineBell className="bell" style={iconStyle} />
            <img
              src="src\images\1.jpg"
              alt="photo"
              className="img1"
              style={iconStyle}
            />
            <p> Ryan Mohammad </p>{" "}
            <RiArrowDropDownLine style={iconStyle} className="dropdown" />
          </div>
        </div>
        <div className="content">
          <div className="left">
            <br />
            <br />
            <h2>User Profile</h2>
            <br />
            <div className="icons">
              <div className="icon-container">
                <SlUserFemale />
                <b>
                  <p>User Info</p>
                </b>
              </div>

              <div className="icon-container">
                <AiOutlineHeart />
                <p>Favourites</p>
              </div>
              <div className="icon-container">
                <AiOutlineStar />
                <p>Watchlist</p>
              </div>
              <div className="icon-container">
                <AiOutlineSetting />
                <p>Settings</p>
              </div>
              <div className="icon-container">
                <HiOutlineBell />
                <p>Notifications</p>
              </div>

              <div className="icon-container2">
                <BiLogOutCircle />
                <p>Logout</p>
              </div>
            </div>
          </div>

          <div className="right">
            <img src="src\images\1.jpg" alt="photo" />

            <div className="text">
              <p className="name">Ryan Mohammad</p>
              <p className="name2">Dhaka , Bangladesh</p> 

              <div className="input-content">
                <div className="input1">
                  <p className="name2">Name</p>
                  <input placeholder="Ryan" rows={5} />
                </div>
                <div className="input2">
                  <p className="name2">Full Name</p>
                  <input placeholder="Mohammad" rows={5} />
                </div>
              </div>


              <div className="input-content">
                <div className="input1">
                  <p className="name2">Email Address</p>
                  <input placeholder="ryanmohammad@gmail" rows={5} />
                </div>
                <div className="input2">
                  <p className="name2">Phone Number</p>
                  <input placeholder="(+98) 9123728167" rows={5} />
                </div>
              </div>


              <div className="input-content">
                <div className="input1">
                  <p className="name2">Location</p>
                  <input placeholder="e.g: Dhaka,Bangladesh" rows={5} />
                </div>
                <div className="input2">
                  <p className="name2">Postal Code</p>
                  <input placeholder="23728167" rows={5} />
                 
                </div>


                <br />
           
                
              </div>


              <div className="input-content">
               
                <div className="inputbtn">
                  <button className="btn">Save Changes</button>
                 
                </div>


                <br />
           
                
              </div>
             
            </div>
            
          </div>
       

          <br />
         
        </div>

        
      </div>
    </>
  );
}

export default App;
