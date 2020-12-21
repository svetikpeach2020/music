const express = require("express");
const multer = require("multer");
const path = require("path");
const axios = require("axios");
const {nanoid} = require("nanoid");
const config = require("../config");

const User = require("../models/User");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const createRouter = () => {
    const router = express.Router();

    router.get("/", async (req, res) => {
        try {
            res.send(await User.find());
        }catch (e) {
            res.status(500).send(e)
        }
    });

    router.post("/", upload.single("avatarImage"), async (req, res) => {
        const { username, password, displayName } = req.body;
        const user = new User({ username, password, displayName });

        if (req.file) {
            user.avatarImage = req.file.filename;
        }

        try {
            user.generateToken();
            await user.save();
            res.send(user);
        }catch (e) {
            res.status(400).send(e)
        }
    });

    router.post("/sessions", async (req, res) => {
        const user = await User.findOne({username: req.body.username});

        if (!user) {
            return res.status(400).send({error: "Username not found"});
        }

        const isMatch = await user.checkPassword(req.body.password);

        if (!isMatch) {
            return res.status(400).send({error: "Password is wrong"});
        }

        user.generateToken();

        await user.save();
        res.send(user);
    });

    router.delete("/sessions", async (req, res) => {
        const token = req.get("Token");
        const success = {message: "Logout success"};
        if (!token) return res.send(success);
        const user = await User.findOne({token});
        if (!user) return res.send(success);
        user.generateToken();
        try {
            await user.save();
        } catch(e) {
            res.status(500).send({message: "Logout failure"});
        }
        res.send(success);
    });

    return router;
};

module.exports = createRouter;
