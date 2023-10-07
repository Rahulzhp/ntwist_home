
import React, { useEffect, useState } from 'react';
import { Button, Image, } from '@chakra-ui/react';
import logo from "../Images/ntwistlight.png";
import { Link } from 'react-router-dom';
import midpic from "../Images/startoic.jpg"
import largeLogo from "../Images/home-image-icons-v6.png"
import "../Styles/Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className='container'>
                <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
                    <div>
                        <Link to="/"><Image width={"19%"} src={logo} alt="logo"></Image></Link>

                    </div>
                    <div className='navItem'>
                        <div className='pages'>
                            {/* <p>Dashboard</p> */}
                            <Link to="/" > Dashboard</Link>
                            {/* <p>About Us</p> */}
                            <Link > About Us</Link>
                            {/* <p>Pricing</p> */}
                            <Link to="/price" > Pricing</Link>
                            {/* <p onClick={onOpen}>Create Script</p> */}
                            <Link >Create Script</Link>
                            {/* <p>Blog</p> */}

                            <Link to='/profile'>Profile</Link>

                        </div>
                    </div>
                </div>
                <div className='home'>
                    <div className='home_text'>
                        <p>Data powered-solutions<br></br>for Industrials Excellence</p>
                        <Button backgroundColor={"blue.500"} padding={"15px"} color={"white"} marginTop={"23px"}>Read More</Button>
                    </div>
                    <div className='homeLogo'>
                        <img src={largeLogo} alt="logo"></img>
                    </div>
                </div>
                <div className='content'>
                    <div className='midSection'>
                        <div>
                            <h2>Mine-To-Mill-To-Mine Optimization</h2>
                            <p>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</p>
                        </div>
                        <div>
                            <img src={midpic}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar