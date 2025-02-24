// SpamDetection.jsx
import React, { useState } from "react";
import { useSpeechRecognition } from "./SpeechRecognition";
import { generateAnswer } from "./GenerateAnswer";
import styles from "./SpamDetection.module.css";

export const SpamDetection = () => {
  const { question, setQuestion, startListening, listening } = useSpeechRecognition();
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const handleDetectSpam = async () => {
    if (!question) {
      alert("Please say something first!");
      return;
    }
    await generateAnswer(question, setAnswer, setGeneratingAnswer);
  };

  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Call Detector</h2>
      <div className={styles.content}>
        <div className={styles.aboutItems}>
          <div className={styles.aboutItem}>
            <button
              className={styles.listenButton}
              onClick={startListening}
              disabled={listening}
            >
              {listening ? "Listening..." : "Start Listening"}
            </button>
          </div>
          <div className={styles.aboutItem}>
            <p className={styles.questionText}>
              Recognized Speech: {question || "No input yet"}
            </p>
          </div>
          <div className={styles.aboutItem}>
            <button
              className={styles.detectButton}
              onClick={handleDetectSpam}
              disabled={generatingAnswer}
            >
              {generatingAnswer ? "Detecting..." : "Check for Spam"}
            </button>
          </div>
          <div className={styles.aboutItem}>
            <p className={styles.answerText}>
              Result: {answer || "No result yet"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpamDetection;
