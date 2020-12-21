const express = require("express");
const multer = require("multer");
const path = require("path");
const {nanoid} = require("nanoid");
const Artist = require("../models/Artist");
const config = require("../config");
const router = express.Router();
const auth = require("../middleware/auth");
const permit = require("../middleware/permit");

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
    router.get("/", async (req, res) => {
        try {
            const artists = await Artist.find({isPublished: true});
            res.send(artists);
        } catch(e) {res.sendStatus(500)}
    });
    router.post("/", upload.single("photo"), async (req, res) => {
        const {name, description} = req.body;
        const artist = new Artist({name, description});

        if (req.file) {
            artist.photo = req.file.filename;
        }

        try{
            await artist.save();
            res.send(artist);
        } catch(e) {res.status(400).send({error: e})}
    });

    router.put("/:id/publish", [auth, permit("admin")], async (req, res) => {
        try{
            const updateObj = {isPublished: true};
            const artist = await Artist.findByIdAndUpdate({_id: req.params.id}, updateObj, {new: true});
            res.send(artist);
        } catch(e) {res.sendStatus(404)}
    });

    router.delete("/:id", [auth, permit("admin")], async (req, res) => {
        try {
            res.send(await Artist.findByIdAndRemove(req.params.id));
        } catch(e) {res.status(500).send(e)}
    });

    return router;
}

module.exports = createRouter;