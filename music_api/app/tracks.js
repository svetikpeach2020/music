const express = require("express");
const Track = require("../models/Track");
const router = express.Router();
const auth = require("../middleware/auth");
const permit = require("../middleware/permit");

const createRouter = () => {
    router.get("/", async (req, res) => {
        let album = {isPublished: true};
        if (req.query.album) {
            album = {
                isPublished: true,
                album: req.query.album
            };
        }
        try {
            const tracks = await Track.find(album)
                .sort({numTrack: 1})
                .populate("album");
            if (req.query.artist) {
                const trackList  = tracks.filter(track => track.album.artist.toString() === req.query.artist);

                return res.send(trackList);
            }
            res.send(tracks);
        } catch(e) {res.sendStatus(500)}
    });

    router.post("/", async (req, res) => {
        const {title, album, longtime, numTrack} = req.body;
        const track = new Track({title, album, longtime, numTrack});

        try{
            await track.save();
            res.send(track);
        } catch(e) {res.status(400).send({error: e})}
    });

    router.put("/:id/publish", [auth, permit("admin")], async (req, res) => {
        try{
            const updateObj = {isPublished: true};
            const track = await Track.findByIdAndUpdate({_id: req.params.id}, updateObj, {new: true})
                .populate("album");
            res.send(track);
        } catch(e) {res.sendStatus(404)}
    });

    router.delete("/:id", [auth, permit("admin")], async (req, res) => {
        try {
            res.send(await Track.findByIdAndRemove(req.params.id));
        } catch(e) {res.status(500).send(e)}
    });

    return router;
}

module.exports = createRouter;