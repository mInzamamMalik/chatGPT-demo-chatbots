import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

export const textGeneration = async (rule, prompt, start_sequence) => {
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt: `${rule} \n\n ${prompt} \n ${start_sequence}`,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: ["You:"],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
