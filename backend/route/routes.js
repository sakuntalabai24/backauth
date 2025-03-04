const express = require("express");
const router = express.Router();
const User = require("../model/models");

router.post("/post", async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        
        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newUser = new User({ firstname, lastname, email, password });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
