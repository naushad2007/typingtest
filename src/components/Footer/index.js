import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.main}>
      Made with{" "}
      <span role="img" aria-label="smile">
        💕
      </span>{" "}
      by{" "}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        style={{ fontWeight: "bold" }}
      >
        naushad2007
      </a>{" "}
      © 2021. Built with{" "}
      <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        style={{ fontWeight: "bold" }}
      >
        ReactJS
      </a>{" "}
      , deployed on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        style={{ fontWeight: "bold" }}
      >
        Netlify
      </a>
    </div>
  );
};

export default Footer;
