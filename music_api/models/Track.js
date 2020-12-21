const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: "Album",
        required: true
    },
    longtime: {
        type: Number,
        required: true
    },
    numTrack: {
        type: Number,
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Track = mongoose.model("Track", TrackSchema);
module.exports = Track;