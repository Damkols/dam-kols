import React from 'react';
import { useState} from 'react';
import Link from 'next/link';

const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navigation">
                <div className="navLogo">
                    <Link href="/"><a>damkols.</a></Link>
                </div>

                <div className={`nav-items ${isOpen && "open"}`}>
                    <Link href="/"><a onClick={() => setIsOpen(!isOpen)}>Home</a></Link>
                    <Link href="Work"><a onClick={() => setIsOpen(!isOpen)}>Work</a></Link>
                    <Link href="Resume"><a onClick={() => setIsOpen(!isOpen)}>Resume</a></Link>
                    <Link href="Contact"><a onClick={() => setIsOpen(!isOpen)}>Contact</a></Link>
                </div>
                
                <div 
                onClick={() => setIsOpen(!isOpen)}
                className={`btn-mobile ${isOpen && "open"}`}
                >
                    <div className="btn-mobile-line"></div>
                    <div className="btn-mobile-line sm-line"></div>
                </div>
        </div>
    )
}

export default MobileNav
