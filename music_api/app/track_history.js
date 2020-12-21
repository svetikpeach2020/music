const express = require("express");
const TrackHistory = require("../models/TrackHistory");
const auth = require("../middleware/auth");


const createRouter = () => {
    const router = express.Router();

    router.get("/", auth, async (req, res) => {
        try {
            res.send(await TrackHistory.find({user: req.user._id})
                .sort({datetime: -1})
                .populate("user", "-token")
                .populate("track")
            );
        }catch (e) {
            res.status(500).send(e)
        }
    });

    router.post("/", auth, async (req, res) => {
        const track_history = new TrackHistory(req.body);
        track_history.user = req.user._id;
        try {
            await track_history.save();
            res.send(track_history);
        }catch (e) {
            res.status(400).send(e)
        }
    });

    return router;
};

module.exports = createRouter;