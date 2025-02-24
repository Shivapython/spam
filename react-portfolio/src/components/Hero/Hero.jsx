import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Stop Spam Calls <br /> Before They Reach You</h1>
        <p className={styles.description}>
          Stay a step ahead with real-time alerts on spam calls 
          detect and dodge the hassle instantly!
        </p>
        <a href="#experience" className={styles.contactBtn}>
          Get Started
        </a>
      </div>
      <video
      src={getImageUrl("hero/heroVideo.mp4")}
      autoPlay
      loop
      muted
      playsInline
      className={styles.heroVideo}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
