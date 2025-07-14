import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Category: {post.category?.name}</p>
    </div>
  );
}
