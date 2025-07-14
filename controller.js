import Post from '../models/Post.js';
import { validationResult } from 'express-validator';

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate('category');
  res.json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('category');
  res.json(post);
};

export const createPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
};

export const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

export const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};