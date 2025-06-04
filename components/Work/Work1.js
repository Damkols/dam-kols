import React from "react";
import { useState } from "react";
import styles from "./Work1.module.css";
import { BsFillEyeFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Work1 = () => {
 const [works, setWorks] = useState([

  {
   title: "Earth-Sustain",
   tools: "React, Ethers.js, Thirdweb",
   description: "Earth-sustain is a crowdfunding decentralized autonomous organization (DAO).",
   live: "https://earth-sustain.vercel.app/details",
   code: "https://github.com/mujibat/GoEthMe",
  },
  {
   title: "Saas Landing Page",
   tools: "Next.js, Framer-motion",
   description: "",
   live: "https://sass-landing-page-ochre.vercel.app/",
   code: "https://github.com/Damkols/Sass-Landing-Page",
  },
        {
   title: "Greenlight API",
   tools: "Golang, PostgreSQL",
   description: "Greenlight is a JSON API for retrieving and managing information about movies",
   code: "https://github.com/Damkols/greenlight",
  },
  {
   title: "Snippetbox",
   tools: "Golang, Mysql",
   description: "Snippetbox lets people paste and share snippets of text",
   code: "https://github.com/Damkols/SnippetBox",
  },
  {
   title: "Blockjack",
   tools: "Typescript",
   description: "A Tokenized Blackjack Game on Cartesi VM",
   code: "https://github.com/Damkols/Blockjack",
  },
  {
   title: "Rawg Clone",
   tools: "React, Chakra UI, Typescript, Axios",
   description: "A website to check out games.",
   live: "https://rawg-clone-six.vercel.app/",
   code: "https://github.com/Damkols/rawg-clone",
  },
  {
   title: "Phastmoney Website",
   tools: "Nextjs, SCSS",
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
   title: "Studio-Succint",
   tools: "HTML, CSS, Javascript",
   description: "Animated landing page for Succint.",
   live: "https://studio-succint.vercel.app/",
   code: "https://github.com/Damkols/studio-succint",
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
