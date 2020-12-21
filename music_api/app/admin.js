const express = require("express");
const Album = require("../models/Album");
const Track = require("../models/Track");
const Artist = require("../models/Artist");
const auth = require("../middleware/auth");
const permit = require("../middleware/permit");

const createRouter = () => {
    const router = express.Router();

    router.get("/albums", [auth, permit("admin")], async (req, res) => {
        try {
            const albums = await Album.find({isPublished: false})
                .sort({year: 1})
                .populate("artist", "name");
            res.send(albums);
        } catch(e) {res.sendStatus(500)}
    });

    router.get("/artists", [auth, permit("admin")], async (req, res) => {
        try {
            const artists = await Artist.find({isPublished: false});
            res.send(artists);
        } catch(e) {res.sendStatus(500)}
    });

    router.get("/tracks", [auth, permit("admin")], async (req, res) => {
        try {
            const tracks = await Track.find({isPublished: false})
                .sort({album: 1})
                .populate("album");
            res.send(tracks);
        } catch(e) {res.sendStatus(500)}
    });

    return router;
};

module.exports = createRouter;