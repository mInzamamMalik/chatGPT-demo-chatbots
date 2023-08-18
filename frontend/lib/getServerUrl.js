export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://depression-counselor-dot-learning-chatbot-393109.lm.r.appspot.com"
    : "http://localhost:5001";
