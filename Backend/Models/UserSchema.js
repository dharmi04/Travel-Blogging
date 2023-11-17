const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
}, { timestamps: true });

// Define models
const Signup = mongoose.model('Signup', SignupSchema);
module.exports = { Signup};
