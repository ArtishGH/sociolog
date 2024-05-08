import "./Chat.scss";
import { FaRegComments } from "react-icons/fa";
import { TbSend2 } from "react-icons/tb";
import WebSocket from "ws";
import React, { useEffect, useState } from "react";

const ws = new WebSocket("ws://localhost:8080");

interface Comment {
  id: number;
  content: string;
  date: Date;
}

interface Post {
  id: number;
  content: string;
  comments: Comment[];
  date: Date;
}

ws.on("open", (ws: any) => {
  console.log("Connected to server");
  console.log(ws);
});

export function Chat() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    ws.on("message", (data: any) => {
      console.log(data);
      setPosts(data);
    });
  }, []);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.querySelector("input") as HTMLInputElement;
    const content = input.value;

    if (content.length === 0) return;

    ws.send({ type: "ADD_POST", content: content });
  };

  return (
    <div className="chat">
      <h1>Post & reply</h1>
      <div className="chat-container">
        <form onSubmit={submitForm}>
          <input placeholder="What's up? Any problem?" type="text" required />
          <button>
            Send
            <TbSend2 />
          </button>
        </form>
        <div className="posts">
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <div className="post" key={post.id}>
                  <p>{post.content}</p>
                  <div className="post-footer">
                    <span>
                      {post.date.getHours()}:{post.date.getMinutes()}
                    </span>
                    <span className="dot" />
                    <span>
                      {post.date.getDay()}/{post.date.getMonth()}/{post.date.getFullYear()}
                    </span>
                    <span className="dot" />
                    <span>
                      <FaRegComments />
                      {post.comments.length}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
