import React from "react";
import { useState } from "react";
import styles from "./Work1.module.css";
import { BsFillEyeFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Work1 = () => {
 const [works, setWorks] = useState([
  {
   title: "Phastmoney Website",
   tools: "Nextjs,Typescript, SCSS",
   description: "Phastmoney Website.",
   live: "https://www.phastmoney.com/",
  },
  {
   title: "Portfolio",
   tools: "Nextjs, CSS",
   description: "A portfolio website showcasing my works and resume.",
   live: "https://dam-kols.vercel.app/",
   code: "https://github.com/Damkols/dam-kols",
  },
  {
   title: "EasyBank",
   tools: "React, CSS",
   description: "A Landing Page.",
   live: "https://easybank-damkols.vercel.app/",
   code: "https://github.com/Damkols/Easybank",
  },
 ]);

 const footerLinks = [
  {
   link: "/",
   title: "Home",
   id: 1,
  },
  {
   link: "/Resume",
   title: "Resume",
   id: 2,
  },
 ];

 return (
  <div className={styles.works}>
   {works.map((work) => (
    <div className={styles.workCard} key="index">
     <div className={styles.card}>
      <h2>{work.title}</h2>
      <h3>{work.tools}</h3>
      <p>{work.description}</p>
      <ul className={styles.links}>
       <li>
        <i>
         <BsFillEyeFill />
        </i>
        <a href={work.live} target="_blank" rel="noopener noreferrer">
         live
        </a>
       </li>
       <li>
        <i>
         <FaLink />
        </i>
        <a href={work.code} target="_blank" rel="noopener noreferrer">
         code
        </a>
       </li>
      </ul>
     </div>
    </div>
   ))}
   <div className={styles.footerlinks}>
    <Footer footerLinks={footerLinks} />
   </div>
  </div>
 );
};

export default Work1;
