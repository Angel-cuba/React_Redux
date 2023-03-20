import axios from 'axios';
export const allUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

export const commentsByPostId = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  const comments = await response.json();
  return comments;
};

export const postsByUserId = async (postId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  const posts = await response.json();
  return posts;
};
