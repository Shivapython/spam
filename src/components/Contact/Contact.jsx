import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <h3>Vit ap campus ,vijaywada</h3>
        <h3>Andhra Pradesh,India-52227</h3>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shivashlok2004@gmail.com">shivashlok2004@gmail.com,ronitdas1212@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shiva-shlok-hn-4846b3327/">linkedin.com/ronit das,linkedin.com/shiva</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/shivapython">github.com/shiva</a>
        </li>
      </ul>
    </footer>
  );
};
