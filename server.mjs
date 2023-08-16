import express, { urlencoded, json } from "express";
import cors from "cors";
import { depressionResponseHandler } from "./controllers/depressionResponseHandler.js";

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use((req, res, next) => {
  console.log(`Path ${req.path} with Method ${req.method}`);
  next();
});

// Routes
app.get("/", (req, res) => res.send("server running"));
app.post("/depression", depressionResponseHandler);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
