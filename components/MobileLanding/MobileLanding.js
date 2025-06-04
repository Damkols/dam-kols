import React from "react";
import Link from "next/link";
import styles from "./MobileLanding.module.css";
import { BiCaretRight } from "react-icons/bi";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const MobileLanding = () => {
 return (
  <div>
   <div className={styles.content}>
    <div className={styles.home}>
     <div className={styles.userImg}>
      <img src="/img.png" alt="User picture" />
     </div>
     <h1>Hello, I&apos;m Kolapo Damola.</h1>
     <p>
      As a Frontend Engineer, I possess a keen interest in crafting web
      applications that are not only visually appealing but also provide a
      seamless user experience. My passion lies in building pixel-perfect
      designs that seamlessly integrate with modern web technologies. Moreover,
      I find great satisfaction in sharing my knowledge with others and helping
      them learn new skills. My areas of interest include Web3, WebGL,
      Animations, and ThreeJs..
     </p>

     <Link href="Work">
      <div className={styles.explore}>
       <a>
        <p>Explore</p>
        <i>
         <BiCaretRight />
        </i>
       </a>
      </div>
     </Link>
    </div>

    <footer className={styles.footer}>
     <div className={styles.socials}>
      <a
       href="https://github.com/Damkols"
       target="_blank"
       rel="noopener noreferrer"
      >
       <i>
        <FaGithub />
       </i>
      </a>
      <a
       href="https://twitter.com/kolsCodes"
       target="_blank"
       rel="noopener noreferrer"
      >
       <i>
        <FaTwitter />
       </i>
      </a>
      <a
       href="https://medium.com/@damkols"
       target="_blank"
       rel="noopener noreferrer"
      >
       <i>
        <FaTwitter />
       </i>
      </a>
      <a
       href="https://www.linkedin.com/in/kolapo-damola-usman-810996133/"
       target="_blank"
       rel="noopener noreferrer"
      >
       <i>
        <FaLinkedin />
       </i>
      </a>
     </div>

     <p>
      inspired by{" "}
      <a href="https://kadet.dev/" target="_blank" rel="noopener noreferrer">
       <span>Collins Enebeli</span>
      </a>
     </p>
    </footer>
   </div>
  </div>
 );
};

export default MobileLanding;
