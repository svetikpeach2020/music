const express = require("express");
const multer = require("multer");
const path = require("path");
const {nanoid} = require("nanoid");
const Album = require("../models/Album");
const Track = require("../models/Track");
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
        let artist = {isPublished: true};
        if (req.query.artist) {
            artist = {
                isPublished: true,
                artist: req.query.artist
            };
        }
        try {
            const albums = await Album.find(artist)
                .sort({year: 1})
                .populate("artist", "name");
            const tracksArr = await Track.aggregate(
                [
                    {"$group": {
                            "_id": "$album",
                            "countTracks": { "$sum": 1 }
                    }}
                ]
            );
            let albumsTracks = albums.map(album =>{
                let { _id, title, artist, year, image, isPublished } = album;
                let { countTracks } = tracksArr.reduce((acc, data) => {
                    if (data._id.toString() === _id.toString()) {
                        acc.countTracks += data.countTracks;
                    }
                    return acc;
                }, {countTracks: 0});
                return { _id, title, artist, year, image, isPublished, countTracks }
            });
            res.send(albumsTracks);
        } catch(e) {res.sendStatus(500)}
    });
    router.get("/:id", async (req, res) => {
        try{
            const album = await Album.findById(req.params.id)
                .populate("artist");
            res.send(album);
        } catch(e) {res.sendStatus(404)}
    });
    router.post("/", upload.single("image"), async (req, res) => {
        const {title, artist, year} = req.body;
        const album = new Album({title, artist, year});

        if (req.file) {
            album.image = req.file.filename;
        }

        try{
            await album.save();
            res.send(album);
        } catch(e) {res.status(400).send({error: e})}
    });

    router.put("/:id/publish", [auth, permit("admin")], async (req, res) => {
        try{
            const updateObj = {isPublished: true};
            const album = await Album.findByIdAndUpdate({_id: req.params.id}, updateObj, {new: true})
                .populate("artist");
            res.send(album);
        } catch(e) {res.sendStatus(404)}
    });

    router.delete("/:id", [auth, permit("admin")], async (req, res) => {
        try {
            res.send(await Album.findByIdAndRemove(req.params.id));
        } catch(e) {res.status(500).send(e)}
    });

    return router;
}

module.exports = createRouter;