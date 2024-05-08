import "express-async-errors";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { WebSocketServer } from "ws";
import { getPosts, addPost, addComment } from "./posts.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/posts", async (req, res) => {
  const posts = await getPosts();
  res.status(200).json(posts);
});

const server = app.listen(8080, () => console.log("Server is listening on port 8080"));
const wss = new WebSocketServer({ server });

wss.on("connection", async (ws) => {
  const posts = await getPosts();
  ws.send(JSON.stringify(posts));

  ws.on("message", (message) => {
    message = JSON.parse(message);
    switch (message.type) {
      case "ADD_POST":
        addPost(message.content);
        break;
      case "ADD_COMMENT":
        addComment(message.postId, message.comment);
        break;
      default:
        break;
    }
    wss.clients.forEach((client) => client.send(JSON.stringify(getPosts())));
  });
});
