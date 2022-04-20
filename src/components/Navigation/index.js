import React from "react";
import "./header.scss";
import logo from '../../assets/img/logo.png';
import ScrollTo from 'react-scroll-into-view';

export const Navigation = () => {
  const toggle = () => {
    var x = document.getElementById("topNav");
    if (x.className === "header__nav"){
      x.className += " responsive";
    } else{
      x.className = "header__nav";
    }
  }
  return(
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src={logo} alt=""/>
        </div>
        <ul className="header__nav" id="topNav">
          <ScrollTo selector={`#home`} alignToTop={true}>
            <li><a>home</a></li>
          </ScrollTo>
          <ScrollTo selector={`#menu`} alignToTop={true}>
            <li><a>menu</a></li>
          </ScrollTo>
          <ScrollTo selector={`#about`} alignToTop={true}>
            <li><a>about us</a></li>
          </ScrollTo>
          <ScrollTo selector={`#contact`} alignToTop={true}>
            <li><a>contact</a></li>
          </ScrollTo>
        </ul>
        <a className="icon" onClick={toggle}>&#9776;</a>
      </div>
    </div>
  );
};