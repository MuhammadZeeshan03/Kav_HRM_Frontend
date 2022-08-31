import React , {useState, useEffect} from 'react'
import './KavNavbar.css';
import { NavLink } from 'react-router-dom';

import $ from 'jquery';
import logo from '../../assets/logoss.png';

const KavNavbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);


  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg"
   style={{padding: "-0.5rem 1rem"}}
   
   >
    
    <a href='/home'><img src={logo} 
    style={{height: '50px'}}/></a>
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">


        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
          
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Home" exact>
                <i 
                className="fas fa-home">
                </i>Home
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i 
                className="far fa-address-book">
                </i>About
              </NavLink> 
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" to="/service" exact>
                <i 
                className="far fa-clone">
                </i>Services
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i className="far fa-copy"> </i>Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/jobOpening" exact>
                <i className="far fa-copy"> </i>Job Openings
              </NavLink>
            </li>




            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/perf" exact>
                <i className="far fa-copy"> </i>Performance
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/TestPage" exact>
                <i className="far fa-copy"> </i>Test Page
              </NavLink>
              </li> */}

                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/LoginForm" exact>
                    <i className="far fa-copy"> </i>Login
                  </NavLink>
                </li> */}


                <li className="nav-item">
                  <NavLink className="nav-link" to="/RegistrationForm" exact>
                    <i className="far fa-copy"> </i>Login
                  </NavLink>
                </li>

{/* 
            <li className="nav-item">
              <NavLink className="nav-link" to="/Account" exact>
                <i className="far fa-copy"> </i> Login
                <Item href="#action/3.1">Action</Item>
                <Item href="#action/3.2">Another action</Item> 
              </NavLink> 
            </li>
*/}
            </ul>
            </div> 

  </nav>
  )
}
export default KavNavbar;