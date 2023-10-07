
import React, { useEffect, useState } from 'react';
import { Button, Image, } from '@chakra-ui/react';
import logo from "../Images/ntwistlight.png";
import { Link } from 'react-router-dom';
import midpic from "../Images/startoic.jpg";
import isto from "../Images/iStockbg.jpg";
import min from "../Images/iStock-min.jpg";
import oil from "../Images/oil.png";
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
                            <Link to="/" > Home</Link>
                            {/* <p>About Us</p> */}
                            <Link > Industries</Link>
                            {/* <p>Pricing</p> */}
                            <Link to="/price" > Ai Software</Link>
                            {/* <p onClick={onOpen}>Create Script</p> */}
                            <Link >Create Blog</Link>
                            {/* <p>Blog</p> */}

                            <Link to='/profile'>Contact Us</Link>

                        </div>
                    </div>
                </div>
                <div className='home'>
                    <div className='home_text'>
                        <p>Data-powered solutions<br></br>for Industrials Excellence</p>
                        <button>Read More</button>
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
                            <button>Read More</button>
                        </div>
                        <div>
                            <img src={midpic}></img>
                        </div>
                    </div>
                    <div className='midSection'>
                        <div>
                            <img src={isto}></img>
                        </div>
                        <div>
                            <h2>Sustainability</h2>
                            <p>Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.</p>
                            <p>With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.</p>
                            <button>Read More</button>
                        </div>

                    </div>
                    <div className='midSection'>
                        <div>
                            <h2>Mineral Processing</h2>
                            <p>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</p>
                            <button>Read More</button>
                        </div>
                        <div>
                            <img src={min}></img>
                        </div>
                    </div>
                    <div className='midSection'>
                        <div>
                            <img src={oil}></img>
                        </div>
                        <div>
                            <h2>Oil & Gas</h2>
                            <p>Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. </p>
                            <p>NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.</p>
                            <button>Read More</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar