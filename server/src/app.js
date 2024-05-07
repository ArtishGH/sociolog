import "express-async-errors";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { WebSocketServer } from "ws";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

const server = app.listen(8080, () => console.log("Server is listening on port 8080"));
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log(`Received message => ${message}`);
    ws.send(`You sent => ${message}`);
  });
});
