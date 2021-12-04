import styles from '../styles/Resume.module.css';
import { FiDownloadCloud } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Resume = () => {
    return (
        <div className={styles.container}>
            <div className={styles.resume}>

                <div className={styles.userInfo}>
                    <h1>Kolapo Damola</h1>
                    <ul className={styles.download}>
                        <li><a href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <i><FaLinkedin /></i>
                            <span>Linkedin</span>
                        </a></li>
                        <li><a href="https://docs.google.com/document/d/1RSEx5hRJ9pqsqC9ZQ3rCfJxdo09vKlVA2GNg1DwB9ks/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <i><FiDownloadCloud /></i>
                            <span>Download</span>
                        </a></li>
                    </ul>
                </div>

                <div className={styles.template}>
                    <h4>Front-end Developer <hr/></h4>
                    <p>I am a Frontend Engineer with a passion for building pixel perfect web applications, with great user interface and user experience. I am interested in Web3, WebGl, Animations, ThreeJs.</p>
                </div>

                <div className={styles.template}>
                    <h4>Technologies I use <hr/></h4>
                    <p>HTML, CSS, Javascript, React Js, Next Js, Gatsby Js, Vue Js, Sass, Styled-components, GraphQL, Framer-motion.</p>
                </div>

                <div className={styles.template}>
                    <h4>Familiar With <hr/></h4>
                    <p>Wordpress, Solidity, ThreeJs.</p>
                </div>

                <div className={styles.template}>
                    <h4>Experience <hr/></h4>
                    <h4>HNG Internship - <span>Front-end developer</span></h4>
                    <p>August 2021 - October 2021</p>
                    <p>I contributed to buiding user interface for products whilst also picking up new skills.</p>
                    <ul>
                        <li><p>- Worked with React and CSS-in-Js to build custom components</p></li>
                        <li><p>- Handled complex state management using react hooks</p></li>
                        <li><p>- Contributed to working on a roadmap for the Zuri YouTube plugin</p></li>
                        <li><p>- Worked with the team to develop the playlist component of the Zuri YouTube plugin</p></li>
                    </ul>
                </div>

                <div className={styles.template}>
                    <h4>Education<hr/></h4>
                    <h4>Federal University Of Technology Akure — B.Eng, Mechanical Engineering</h4>
                    <p>2016-2021</p>
                </div>
            </div>
        </div>
    );
}
 
export default Resume;