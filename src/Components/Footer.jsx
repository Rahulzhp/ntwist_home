import React from 'react'
import "../Styles/Footer.css";
import logo from "../Images/ntwistlight.png";
import tweet from "../Images/icons8-twitter-50.png";
import linked from "../Images/icons8-linked-in-50.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <div className='footerlogo'>
                    <img src={logo}></img>
                </div>
            </div>
            <div className='footerP'>
                <p>Home </p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Privacy Policy </p>
                <p>Sitemap</p>
            </div>
            <div className='footerH'>
                <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
            </div>
            <div className='footerHg'>
                <img src={tweet}></img>
                <img src={linked}></img>
            </div>
            <div className='footend'>
                <p>© 2022. Ntwist Inc.</p>
            </div>
        </div>
    )
}

export default Footer