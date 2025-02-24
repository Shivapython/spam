import { useState } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

export const useSpeechRecognition = () => {
  const [question, setQuestion] = useState("");
  const [listening, setListening] = useState(false);

  const startListening = () => {
    recognition.start();
    setListening(true);
  };

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;
    setQuestion(spokenText);
    setListening(false);
  };

  recognition.onerror = (event) => {
    console.error("Error in speech recognition: ", event.error);
    setListening(false);
  };

  return {
    question,
    setQuestion,
    startListening,
    listening,
  };
};
