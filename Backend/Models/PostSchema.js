const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: false,
    }

},
{timestamps: true})

module.exports  = mongoose.model('Post', PostSchema);