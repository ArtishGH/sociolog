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
    content: "My child haven't talked to me for a week. What should I do?",
    comments: [
      { id: 1, content: "Going on a trip just the two of you might work" },
      { id: 2, content: "Buy him a car" },
      { id: 3, content: "BOMBOCLAT" },
      { id: 4, content: "I have no idea" },
      { id: 5, content: "Oh thats terrible!" },
    ],
    date: new Date(),
  },
  {
    id: 2,
    content: "I think my kid has asbergers. What should I do?",
    comments: [
      { id: 1, content: "Maybe a better school will help ( Technischools )" },
      { id: 2, content: "He might just be shy" },
      { id: 3, content: "I have no idea" },
      { id: 4, content: "Oh thats terrible!" },
      { id: 5, content: "Im sorry to hear that" },
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
