import Link from "next/link";
import styles from './SideNav.module.css';
import { FaTwitter, FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const SideNav = () => {

    return (
        <div className={styles.container}>
            <div className={styles.sideNav}>
                <div className={styles.navHeader}>
                    <h1>Hello, I'm <br/> Kolapo Damola.</h1>
                    <p>I am a Frontend Engineer with a passion for designing clean, accessible and intuitive web applications, and I have an eye for design with a user-driven approach to development</p>
                </div>

                <nav className={styles.dNav}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>
                                    <span>00</span>  
                                    <div className={styles.btnNavLine}></div>
                                    <span>Work</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="Resume">
                                <a> 
                                    <span>01</span>
                                    <div className={styles.btnNavLine}></div>
                                    <span>Resume</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="Contact">
                                <a> 
                                    <span>02</span> 
                                    <div className={styles.btnNavLine}></div>
                                    <span>Contact</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={styles.user}>
                    <div className={styles.userImg}><img src="/img.png" alt="User picture" /></div>
                    <ul>
                        <li>
                            <p><i><FaGithub /></i></p>
                            <a href="https://github.com/Damkols"
                            target="_blank"
                            rel="noopener noreferrer">Github</a>
                            <p><i><FaExternalLinkAlt /></i></p>
                        </li>
                        <li>
                            <p><i><FaTwitter /></i></p>
                            <a href="https://twitter.com/kolsCodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Twitter</a>
                            <p><i><FaExternalLinkAlt /></i></p>
                        </li>
                    </ul>
                </div>

                <div className={styles.inspire}>
                <span>inspired by <a href="https://kadet.dev/"
                target="_blank"
                rel="noopener noreferrer"
                >Collins Enebeli</a></span>
                </div>
            </div>
        </div>
    );
}
 
export default SideNav;