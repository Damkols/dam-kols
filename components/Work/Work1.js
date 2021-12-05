import React from 'react';
import { useState } from "react";
import styles from './Work1.module.css';
import { BsFillEyeFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";


const Work1 = () => {

    const [works, setWorks] = useState([
        {
            title: "Portfolio",
            tools: "Nextjs, CSS",
            description: "A portfolio website showcasing my works and resume.",
            live: "https://dam-kols.vercel.app/",
            code: "https://github.com/Damkols/dam-kols",
            id: 1
        },

        {
            title: "Movies-App",
            tools: "React, CSS",
            description: "A movies website which displays ratings of a movie, and description.",
            live: "https://damkols.github.io/movies-app",
            code: "https://github.com/Damkols/movies-app",
            id: 2
        },

        {
            title: "Quote generator",
            tools: "React, CSS",
            description: "A website that displays random quotes and advice.",
            live: "https://quotegenerator1.netlify.app/",
            code: "https://github.com/Damkols/Quote-generator",
            id: 3
        },

        {
            title: "Crypto-App",
            tools: "React, CSS",
            description: "A Crypto website that displays basic information about Crypto-currencies.",
            live: "https://damkols.github.io/Coin-tracker",
            code: "https://github.com/Damkols/Coin-tracker",
            id: 4
        },

        {
            title: "Landing page",
            tools: "HTML, CSS, Javascript",
            description: "Concept Landing page for Pepsi.",
            live: "https://damkols.github.io/Pepsi-landing-page",
            code: "https://github.com/Damkols/Pepsi-landing-page",
            id: 5
        },

        {
            title: "Resume",
            tools: "HTML and CSS",
            description: "A simple resume website",
            live: "https://damkols.github.io/HNG-resume",
            code: "https://github.com/Damkols/HNG-resume",
            id: 6
        },

        {
            title: "404 page",
            tools: "HTML and CSS",
            description: "A simple 404 page.",
            live: "https://rwd404page.netlify.app/",
            code: "https://github.com/Damkols/Mobile-responsive-404-error-page",
            id: 7
        }

    ]);

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
                                <i><BsFillEyeFill /></i>
                                <a href={work.live}
                                target="_blank"
                                rel="noopener noreferrer">live</a>
                            </li>
                            <li>
                                <i><FaLink /></i>
                                <a href={work.code}
                                target="_blank"
                                rel="noopener noreferrer">code</a>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Work1;