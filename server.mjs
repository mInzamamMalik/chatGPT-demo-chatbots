import express, { urlencoded, json } from "express";
import cors from "cors";
import { depressionResponseHandler } from "./controllers/depressionResponseHandler.js";

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://chatgpt-chatbot-shehza-d.vercel.app",
      "https://depression-counselor-chatbot.vercel.app",
    ],
  })
);
app.use(urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`Path ${req.path} with Method ${req.method}`);
  next();
});

// Routes
app.get("/", (req, res) => res.send("counselor server running"));
app.post("/api/v1/depression", depressionResponseHandler);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
