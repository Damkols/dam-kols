import React from "react";
import styles from "./Footer.module.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = ({ footerLinks }) => {
  return (
    <div>
      <div className={styles.footer_links}>
        {footerLinks.map((footer) => (
          <button key={footer.id}>
            <Link href={footer.link}>{footer.title}</Link>
          </button>
        ))}
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
          <a
            href="https://kadet.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Collins Enebeli</span>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
