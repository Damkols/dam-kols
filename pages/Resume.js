import styles from "../styles/Resume.module.css";
import { FiDownloadCloud } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

const Resume = () => {
 const footerLinks = [
  {
   link: "/Work",
   title: "Work",
   id: 1,
  },
  {
   link: "/Contact",
   title: "Contact",
   id: 2,
  },
 ];

 return (
  <div className={styles.container}>
   <div className={styles.resume}>
    <div className={styles.userInfo}>
     <h1>Kolapo Damola</h1>
     <ul className={styles.download}>
      <li>
       <a
        href="https://www.linkedin.com/in/kolapo-damola-usman-810996133/"
        target="_blank"
        rel="noopener noreferrer"
       >
        <i>
         <FaLinkedin />
        </i>
        <span>Linkedin</span>
       </a>
      </li>
      <li>
       <a
        href="https://docs.google.com/document/d/1n0O-kug0iHbbrvb5UJMx65qv_zU45RDaK42A-oLCapI/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
       >
        <i>
         <FiDownloadCloud />
        </i>
        <span>Download Resume</span>
       </a>
      </li>
     </ul>
    </div>
{/* 
    <div className={styles.template}>
     <h4>
      Front-end Developer <hr />
     </h4>
     <p>
      I am a Frontend Engineer with a passion for building pixel perfect web
      applications, with great user interface and user experience. I am
      interested in Web3, WebGl, Animations, ThreeJs.
     </p>
    </div>

    <div className={styles.template}>
     <h4>
      Technologies I use <hr />
     </h4>
     <p>
      HTML, CSS, Javascript, Typescript, React, Vuejs, Nextjs, Nuxt, Gatsby,
      Redux, Redux Toolkit, Redux Toolkit Query, Scss, CSS-in-Js,
     </p>
    </div>

    <div className={styles.template}>
     <h4>
      Familiar With <hr />
     </h4>
     <p>Wordpress, Solidity, ThreeJs.</p>
    </div>

    <div className={styles.template}>
     <h4>
      Experience <hr />
     </h4>
     <h4>
      Phastmoney - <span>Front-end developer</span>
     </h4>
     <p>April 2022 – February 2023</p>
     <p>
      - Designed user-friendly software to improve accessibility and
      responsiveness.
     </p>
     <ul>
      <li>
       <p>
        - Used established coding standards to streamline debugging,
        documentation, and system maintenance.
       </p>
      </li>
      <li>
       <p>
        - Optimized websites to improve backward and cross-browser
        compatibility.
       </p>
      </li>
      <li>
       <p>
        - Collaborated with teammates to improve processes and produce better
        tools.
       </p>
      </li>
      <li>
       <p>
        - Developed web applications using Agile and continuous delivery
        processes to refine the quality and improve output.
       </p>
      </li>
      <li>
       <p>
        - Responsible for developing and maintaining Android applications for
        the Phastmoney loan App with React Native.
       </p>
      </li>
      <li>
       <p>
        - Responsible for developing and maintaining the Phastmoney Enterprise
        Application with React, Typescript, and Redux.
       </p>
      </li>
      <li>
       <p>
        - Led the UI team and was in charge of designing the Phastmoney Web
        Application.
       </p>
      </li>
      <li>
       <p>
        - Responsible for developing, and maintaining the Phastmoney Web
        Application with Nextjs
       </p>
      </li>
      <li>
       <p>
        - Tasked with handling the Build Pipeline and Deployment Process with
        GitlaDeveloped web applications using Agile and continuous delivery
        processes to refine the quality and improve output.
       </p>
      </li>
     </ul>
    </div>
    <div className={styles.template}>
     <h4>
      Experience <hr />
     </h4>
     <h4>
      HNG Internship - <span>Front-end developer</span>
     </h4>
     <p>August 2021 - October 2021</p>
     <p>
      I contributed to buiding user interface for products whilst also picking
      up new skills.
     </p>
     <ul>
      <li>
       <p>- Worked with React and CSS-in-Js to build custom components</p>
      </li>
      <li>
       <p>- Handled complex state management using react hooks</p>
      </li>
      <li>
       <p>- Contributed to working on a roadmap for the Zuri YouTube plugin</p>
      </li>
      <li>
       <p>
        - Worked with the team to develop the playlist component of the Zuri
        YouTube plugin
       </p>
      </li>
     </ul>
    </div>

    <div className={styles.template}>
     <h4>
      Education
      <hr />
     </h4>
     <h4>
      Federal University Of Technology Akure — B.Eng, Mechanical Engineering
     </h4>
     <p>2016-2021</p>
    </div> */}
   </div>
   <div className={styles.footerlinks}>
    <Footer footerLinks={footerLinks} />
   </div>
  </div>
 );
};

export default Resume;
