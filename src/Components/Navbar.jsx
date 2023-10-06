
import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';
import logo from "../Images/favicon.png";
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#service" },
        { name: "CONTACT", link: "#contact" },
    ];

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
        <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div>
                <Link to="/">
                    <Image width={"25%"} src={logo} alt="logo" />
                </Link>
            </div>
            <div>
                <div className='pages'>

                </div>
            </div>
        </div>
    )
}

export default Navbar