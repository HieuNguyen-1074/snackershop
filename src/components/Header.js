import React from 'react';
import logo from '../img/logo.png'
import { AiFillCaretDown } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../css/header.css'

const Header = () => {
    return (
        <div className = "header">
            <div className= "header-left">
                <img src={logo} alt="" />
                <ul>
                    <li><a href="">adidas men</a></li>
                    <li><a href="">adidas woman</a></li>
                    <li><a href="">adidas kids</a></li>
                </ul>
            </div>
          <div className = "header-right">
              <ul>
                  <li><a href="">search</a></li>
                  <li><a href="">join</a><a href="">log in</a> </li>
                  <li><a href="">cart[<span>0</span>]</a></li>
                  <li><a href="">usa<AiFillCaretDown /></a></li>
              </ul>
              <GiHamburgerMenu className = "header-menu-icon" />
              </div>  
        </div>
    );
}

export default Header;
