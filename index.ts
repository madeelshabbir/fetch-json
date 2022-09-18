import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1'

interface Post {
  userId: number;
  id: number;
  title: string;
};

axios.get(url)
.then(res => {
  const {userId, id, title} = res.data as Post;

  logResponse(userId, id, title);
});


const logResponse = (userId: number, id: number, title: string) => {
  console.log(`
    User ID: ${userId},
    ID: ${id},
    Title: ${title}
  `);
}
