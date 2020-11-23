import React from 'react';
import productLink from '../img/Sneakers2.png'
import '../css/wrapper.css';

const Wrapper = () => {
    return (
        <div className = "wrapper">
            <div className = "wrapper-left">
                <p className = "price">$120</p>
                <div className = "colorpick">
                    <h1>color pick</h1>
                    <p></p>
                    <p></p>
                </div>
                <h1>explore</h1>
                <a href="">reviews</a>
            </div>
            <div className = "wrapper-center product-img">
                 <div className = "product-container">
                 <img src={productLink} alt="" />
                 </div>
            </div>
            <div className = "wrapper-right">
                <h1>
                    <p>adidas</p><br/>
                    <p>superstar</p> <br/>
                    <p>men's shoe</p><br/>
                </h1>
                <a href="">add to cart</a>
            </div>
        </div>
    );
}

export default Wrapper;
