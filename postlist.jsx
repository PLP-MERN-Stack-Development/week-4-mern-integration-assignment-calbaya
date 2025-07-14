import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/post/${post._id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

