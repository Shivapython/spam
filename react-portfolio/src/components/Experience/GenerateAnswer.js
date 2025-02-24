import axios from "axios";

export const generateAnswer = async (question, setAnswer, setGeneratingAnswer) => {
  setGeneratingAnswer(true);
  setAnswer("Loading your answer... It might take up to 10 seconds");

  const modifiedQuestion = `hi tell whether the below is fraud or normal in one word: "${question}"`;

  try {
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDEsgF9oLaAQMcNBDdE0v4uGq8qidXGk30`,
      method: "post",
      data: {
        contents: [{ parts: [{ text: modifiedQuestion }] }],
      },
    });

    setAnswer(response.data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error(error);
    setAnswer("Sorry - Something went wrong. Please try again!");
  }

  setGeneratingAnswer(false);
};
