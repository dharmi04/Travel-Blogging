const { Signup } = require('../Models/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

const signupUser = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new Signup({ username, password: hashedPassword, email });
        const savedUser = await newUser.save();
        
        const token = createToken(savedUser._id);
        
        res.status(200).json({ email: savedUser.email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    
    try {
        if (!username || !password) {
            return res.status(400).json({ message: 'All fields must be filled.' });
        }

        const user = await Signup.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'User not found.' });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: 'Incorrect password.' });
        }

        const token = createToken(user._id);

        res.status(200).json({ message: 'Login success', user, token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { signupUser, loginUser };
