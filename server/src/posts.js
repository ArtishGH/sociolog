// export interface Message {
//   id: number;
//   sender: string;
//   content: string;
// }

// export interface Conversation {
//   id: number;
//   creator: string;
//   messages: Message[];
// }

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
];

export const getPosts = (id) => (id ? posts.find((post) => post.id === id) : posts);

export const addPost = (content) => {
  const post = { id: posts.slice(-1)[0].id + 1, content, comments: [], date: new Date() };
  posts.push(post);
};

export const addComment = (postId, comment) => {
  const post = posts.find((post) => post.id === parseInt(postId));
  comment = { id: post.comments.slice(-1)[0].id + 1, ...comment, date: new Date() };
  post.comments.push(comment);
};
