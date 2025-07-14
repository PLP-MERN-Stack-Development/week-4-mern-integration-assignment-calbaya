import { Routes, Route, Link } from 'react-router-dom';
import PostList from './pages/PostList';
import PostView from './pages/PostView';
import PostForm from './pages/PostForm';

export default function App() {
  return (
    <div className="p-4">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostView />} />
        <Route path="/create" element={<PostForm />} />
      </Routes>
    </div>
  );
}
