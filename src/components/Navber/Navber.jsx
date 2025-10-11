import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import "./Navbar.css"
const Navber = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollProgress(scrolled);
        setShowButton(scrollTop > 200);
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className="main-hearder bg-dark">
            <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
            {/* <div className="container">
                <div className="row m-0 text-center">
                    <div className="col-12">
                        <ul className="d-flex p-0 m-0 list-unstyled">
                            <li className='col py-4'><Link className='text-white p-0 m-0 text-decoration-none text-capitalize' to="/">home</Link></li>
                            <li className='col py-4'><Link className='text-white p-0 m-0 text-decoration-none text-capitalize' to="/experience">experience</Link></li>
                            <li className='col py-4'><Link className='text-white p-0 m-0 text-decoration-none text-capitalize' to="/projects">projects</Link></li>
                            <li className='col py-4'><Link className='text-white p-0 m-0 text-decoration-none text-capitalize' to="/contact">contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {showButton && (
                <button className="scroll-top" onClick={scrollToTop}>
                    ↑ Top
                </button>
            )}
        </header>
    )
}
export default Navber