import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, category })
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      /><br />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        required
      /><br />
      <select value={category} onChange={e => setCategory(e.target.value)} required>
        <option value="">Select category</option>
        {categories.map(cat => (
          <option key={cat._id} value={cat._id}>{cat.name}</option>
        ))}
      </select><br />
      <button type="submit">Create Post</button>
    </form>
  );
}