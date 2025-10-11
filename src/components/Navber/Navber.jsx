import React, { useEffect, useState } from "react";
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
        <header>
            <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
            {showButton && (<button className="scroll-top" onClick={scrollToTop}>↑ Top</button>)}
        </header>
    )
}
export default Navber