import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Real-Time Spam Detection</h3>
              <p>
              Instantly detect spam calls with advanced algorithms that analyze call data in 
              real-time to help you stay one step ahead of potential scams.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Instant Alerts</h3>
              <p>
                Receive immediate notifications when a spam call is identified,
                allowing you to dodge unwanted interruptions with ease.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>User Reporting</h3>
              <p>
              Contribute to a safer network by reporting unknown or suspicious calls, helping others stay aware of potential spam.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Spam Call Insights</h3>
              <p>
              Access analytics on spam calls to identify trends and patterns, helping you stay informed about current threats.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
