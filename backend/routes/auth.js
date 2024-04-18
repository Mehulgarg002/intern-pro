const express = require('express')
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchUser');
const router = express.Router()

//Create a user using post :"/api/auth/createuser". no login authentication required
router.post('/createuser', [
    body('name', "Enter a vaild name of length min:4").isLength({ min: 4 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', "Enter the password of length min:5").isLength({ min: 5 }),

], async (req, res) => {
    //if errors are their , send bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // check email if already exist or not
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            res.status(400).json({ error: "sorry a user is already exist with same email." })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        // create a new user
        user = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: secPass,
        })

        const data = {
            user: { id: user.id }
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECRET)
        res.json({ authtoken })

    }
    // catch error 
    catch (error) {
        console.error(error.message)
        res.status(500).json({ error: "some error occured." })

    }
})

//Create a user using post :"/api/auth/login". no login authentication required
router.post('/login', [
    body('email', 'enter a valid email').isEmail(),
    body('password', "password can not be blank").exists(),
], async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ error: "Please login with correct credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            res.status(400).json({ error: "Please login with correct credentials" })
        }
        const data = {
            user: { id: user.id }
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECRET)
        res.json({ authtoken })

    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: "Internal server error occured." })
    }
})

//Create a user using post :"/api/auth/getuser".  login authentication required

router.post('/getuser', fetchuser, async (req, res) => {
    try {
        let userId = req.user.id
        const user = await User.findById(userId).select('-password')
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: "Internal server error occured." })
    }
})

//upapdte a user pfp using put :"/api/auth/updateprofile".  login authentication required

router.put('/updateprofile', fetchuser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Assuming the client sends the URL of the new profile picture in the request body
        user.profilePic = req.body.profilePic;
        user.location = req.body.location;

        await user.save();

        res.json({ message: 'Profile picture updated successfully', user });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal server error occurred' });
    }
});



module.exports = router