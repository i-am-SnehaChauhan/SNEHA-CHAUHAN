import React from 'react'; 
import {ReactNavbar}from "overlay-navbar" ;
import logo from "../../images/logo.png";
import {FaUserAlt} from "react-icons/fa";

const Header = () => {
  return <ReactNavbar
  
  navColor1 = "white"
  navColor2 = "hsl(219,48%,8%)"
  burgerColor= "hsl(250, 100%, 75%)"
  burgerColorHover= "hsl(250, 100%, 75%)"
  logo = {logo}
  logoWidth = "250px"
  nav2justifyContent = "space-around"
  nav3justifyContent = "space-around"
  link1Text = "Home" link1Url = "/Home"
  link2Text = "About" link2Url = "/About"
  link3Text = "Projects" link3Url = "/Projects"
  link4Text = "Contact" link4Url = "/Contact"
  link1ColorHover = "white"
  link1Color = "HSL(250,100%,75%)"
  link1Size = "1.5rem"
  link1Padding = "3vmax"
  //profileIcon = {true}
 profileIconElement = {FaUserAlt}
 // profileIconColor = "HSL(250,100%,75%)"
 // profileIconColorHover = "white"
  />;
     
};

export default Header;