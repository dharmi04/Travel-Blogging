const express = require('express')
const {signupUser, loginUser} = require('../Controllers/User-Controller')
const postController= require('../Controllers/Post-Controller')



const router = express.Router()

router.post('/signup', signupUser)
router.post('/login', loginUser)

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




module.exports= router