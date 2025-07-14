import express from 'express';
import { getCategories, createCategory } from '../controllers/categories.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/', createCategory);

export default router;
