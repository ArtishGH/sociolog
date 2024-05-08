import "./Chat.scss";
import { FaRegComments } from "react-icons/fa";
import { TbSend2 } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Comment {
  id: number;
  content: string;
  date?: Date;
}

interface Post {
  id: number;
  content: string;
  comments: Comment[];
  date?: Date;
}

const ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
  console.log("Connected to server");
};
ws.onerror = (error) => {
  console.error("WebSocket error:", error);
};

export function Chat() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("http://localhost:8080/api/posts");
      const data = response.data;
      setPosts(data);
    };
    getPosts();
  }, []);

  ws.onmessage = (message) => {
    const data = JSON.parse(message.data);
    setPosts(data);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.querySelector("input") as HTMLInputElement;
    const content = input.value;

    if (content.length === 0) return;
    const post = { content, type: "ADD_POST" };
    ws.send(JSON.stringify(post));
    input.value = "";
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
          posts.map((post) => (
            <div className="post" key={post.id}>
              <p>{post.content}</p>
              <div className="post-footer">
                {post.date && (
                  <>
                    <span>{new Date(post.date).toLocaleTimeString()}</span>
                    <span className="dot" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="dot" />
                  </>
                )}
                <span>
                  <FaRegComments />
                  {post.comments.length}
                </span>
              </div>
              {post.comments.map((comment) => (
                <div className="comment" key={comment.id}>
                  <span className="dot" />
                  <p>- {comment.content}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}