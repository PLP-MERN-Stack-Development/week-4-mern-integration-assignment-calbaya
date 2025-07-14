// ======== server/routes/posts.js ========
import express from 'express';
import { body } from 'express-validator';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/',
  body('title').notEmpty(),
  body('content').notEmpty(),
  createPost
);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;