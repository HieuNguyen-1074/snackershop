import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import '../css/footer.css';

const Footer = () => {
    return (
        <div className = "footer">
            <a href=""><IoIosArrowBack  className = "footer-icon"/><a href="" className = "footer-back">back</a></a>
            <div className = "footer-right">
                <a href="">help</a>
                <a href="">shop</a>
                <a href="">customize</a>
            </div>
        </div>
    );
}

export default Footer;
