import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(cors())
  // app.use(requestLogger);
}

app.use(bodyParser);
app.use(helmet);

app.get("/ping", (_req, res) => {
  res.send("pong");
});



export default app;