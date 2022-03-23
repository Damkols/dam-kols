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
      title: "Loopstudios",
      tools: "React, SaSS",
      description: "A Virtual reality website",
      live: "https://dazzling-albattani-46fe4e.netlify.app/",
      code: "https://github.com/Damkols/loopstudios",
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
