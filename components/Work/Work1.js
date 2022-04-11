import React from "react";
import { useState } from "react";
import styles from "./Work1.module.css";
import { BsFillEyeFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Work1 = () => {
  const [works, setWorks] = useState([
    {
      title: "Portfolio",
      tools: "Nextjs, CSS",
      description: "A portfolio website showcasing my works and resume.",
      live: "https://dam-kols.vercel.app/",
      code: "https://github.com/Damkols/dam-kols",
      id: 1,
    },

    {
      title: "Covid19 tracker",
      tools: "Vue, TailwindCss",
      description: "A webapp that tracks confirmed Covid19 cases and deaths",
      live: "https://co-vid19tracker.netlify.app/",
      code: "https://github.com/Damkols/Covid-19-tracker",
      id: 2,
    },

    {
      title: "Movie App",
      tools: "React",
      description:
        "Built a Movie App that collects Movie ratings, Images, and descriptions from an API",
      live: "http://damkols.me/movies-app/",
      code: "https://github.com/Damkols/movies-app/tree/master",
      id: 3,
    },

    {
      title: "Shopping cart API",
      tools: "Node, Express, MongoDB",
      description:
        "A simple shopping cart Api built with Node, Express, and MongoDb",
      live: "https://shopping-cart-crud-api-v2.herokuapp.com/api/posts",
      code: "https://github.com/Damkols/refactored-api",
      id: 4,
    },

    {
      title: "PWA Weather App",
      tools: "React, Axios",
      description:
        "A Progressive web App that displays weather condition in Countries(Capital) all around the world",
      live: "https://62012087d2501b31ffa388fd--lucid-euler-ba1802.netlify.app/",
      code: "https://github.com/Damkols/PWA-Weather-App",
      id: 5,
    },

    {
      title: "Loopstudios",
      tools: "React, SaSS",
      description: "A Virtual reality website",
      live: "https://dazzling-albattani-46fe4e.netlify.app/",
      code: "https://github.com/Damkols/loopstudios",
      id: 6,
    },

    {
      title: "Kiddies Landing Page",
      tools: "React, Styled-components",
      description:
        "A landing page for kiddies learning built with React and Styled components",
      live: "https://hungry-borg-14bf26.netlify.app/",
      code: "https://github.com/Damkols/SqrLearning",
      id: 7,
    },

    {
      title: "Snippet Landing Page",
      tools: "React, SASS",
      description: "A Snippet landing page using React and SASS",
      live: "https://6214d2c2fa42c7babdad1a0f--boring-panini-6fc31b.netlify.app/",
      code: "https://github.com/Damkols/Snippets",
      id: 8,
    },

    {
      title: "Animated Landing page",
      tools: "HTML, SASS, Gsap, JavaScript ",
      description: "Love Yours, Jcole inspired Landing page",
      live: "https://jade-peony-58058d.netlify.app/",
      code: "https://github.com/Damkols/scroll-animation-with-Gsap-and-smooth-scrollbar",
      id: 9,
    },

    {
      title: "Stack Landing page",
      tools: "React, CSS",
      description: "3d stack effect Landing page built with React and CSS",
      live: "https://spiffy-narwhal-db7ddc.netlify.app/",
      code: "https://github.com/Damkols/3d-Stack-effect",
      id: 10,
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
