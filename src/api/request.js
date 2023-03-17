export const allUsers = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json));
}

export const commentsByPostId = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(json => console.log(json));
}

export const postsByUserId = async (postId) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(json => console.log(json));
}