import express from 'express';
// import { likePost } from '../../client/src/actions/posts.js';
// import { updatePost } from '../../client/src/api/index.js';


import { signin, signup } from '../controllers/user.js'
const router = express.Router();

router.post('/signin',signin);
router.post('/signup',signup);

export default router;