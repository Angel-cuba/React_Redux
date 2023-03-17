export const allUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

export const commentsByPostId = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  const comments = await response.json();
  return comments;
};

export const postsByUserId = async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  const posts = await response.json();
  return posts;
};
