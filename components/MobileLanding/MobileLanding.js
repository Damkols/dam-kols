import React from 'react';
import Link from 'next/link';
import styles from './MobileLanding.module.css';
import { BiCaretRight } from "react-icons/bi";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";


const MobileLanding = () => {
    return (
        <div>
             <div className={styles.content}>
                <div className={styles.home}>
                    <div className={styles.userImg}><img src="/img.png" alt="User picture" /></div>
                    <h1>Hello, I'm Kolapo Damola.</h1>
                    <p>I am a Frontend Engineer with a passion for designing clean, accessible and intuitive web applications, and I have an eye for design with a user-driven approach to development.</p>
                    
                    <Link href="Work">
                            <div className={styles.explore}>
                                <a>
                                    <p>Explore</p>
                                    <i><BiCaretRight /></i>
                                </a>
                            </div>
                    </Link>
                </div>

                <footer className={styles.footer}>
                        <div className={styles.socials}>
                                <a href="https://github.com/Damkols"
                                target="_blank"
                                rel="noopener noreferrer"
                                ><i><FaGithub /></i></a>
                                <a href="https://twitter.com/kolsCodes"
                                target="_blank"
                                rel="noopener noreferrer"
                                ><i><FaTwitter /></i></a>
                                <a href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                ><i><FaLinkedin /></i></a>
                        </div>

                        <p>inspired by <a href="https://kadet.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><span>Collins Enebeli</span></a></p>
                    </footer>
        </div>
        </div>
    )
}

export default MobileLanding
