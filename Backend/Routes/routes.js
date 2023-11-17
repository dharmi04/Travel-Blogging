const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { signupUser, loginUser } = require('../Controllers/User-Controller');
const postController = require('../Controllers/Post-Controller');
const { getUserProfile } = require('../Controllers/getUserProfile');

const router = express.Router();

router.use(cookieParser());
router.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }, 
}));


router.post('/signup', signupUser);
router.post('/login', loginUser);

// Create a new post
router.post('/posts', postController.createPost);

// Get all posts
router.get('/posts', postController.getAllPosts);

// Get a specific post by ID
router.get('/posts/:id', postController.getPostById);

// Update a post by ID
router.put('/posts/:id', postController.updatePostById);

// Delete a post by ID
router.delete('/posts/:id', postController.deletePostById);


// Get user profile
router.get('/profile', getUserProfile);


  

// Place the /profile route after the verifyToken middleware


module.exports = router;
