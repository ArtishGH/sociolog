import "./Chat.scss";
import { FaRegComments } from "react-icons/fa";
import { TbSend2 } from "react-icons/tb";

const posts = [
  {
    id: 1,
    content: "Hello, World!",
    comments: [
      { id: 1, content: "Hello, Bob!" },
      { id: 2, content: "Hi, Alice!" },
      { id: 3, content: "How are you?" },
      { id: 4, content: "I am fine, thank you!" },
      { id: 5, content: "Good to hear that!" },
    ],
    date: new Date(),
  },
  {
    id: 2,
    content: "Hello, World!",
    comments: [
      { id: 1, content: "Hello, Alice!" },
      { id: 2, content: "Hi, Bob!" },
      { id: 3, content: "How are you?" },
      { id: 4, content: "I am fine, thank you!" },
      { id: 5, content: "Good to hear that!" },
    ],
    date: new Date(),
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: [],
    date: new Date(),
  },
];

export function Chat() {
  return (
    <div className="chat">
      <h1>Post & reply</h1>
      <div className="chat-container">
        <form>
          <input placeholder="What's up? Any problem?" type="text" />
          <button>
            Send
            <TbSend2 />
          </button>
        </form>
        <div className="posts">
          {posts.map((post) => {
            return (
              <div className="post">
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
