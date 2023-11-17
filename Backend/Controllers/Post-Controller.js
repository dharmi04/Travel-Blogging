const Post = require('../Models/PostSchema')

//create
const createPost = async(req,res)=>{
    try{
        const {title, desc}= req.body
        const newPost = new Post({title, desc})
        const savedPost = await newPost.save()
        res.status(201).json(savedPost)
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

//get all posts
const getAllPosts=async(req,res)=>{
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

//sp. by ID
const getPostById = async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(!post){
            return res.status(404).json({error: 'Post not found'})
        }
        res.status(200).json(post)
    }catch (error){
        res.status(500).json({error: error.message})
    }
}
//update a post
const updatePostById = async(req,res)=>{
    try{
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true}
            );
        if (!updatePost){
            return res.status(404).json({error: "Post not found"});
        }
        res.status(200).json(updatedPost);
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

//delete post
const deletePostById = async(req,res)=>{
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost){
            return res.status(404).json({error: "Post not found"});
        }
        res.status(204).end;
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePostById,
    deletePostById,
  };