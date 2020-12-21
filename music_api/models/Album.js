const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: "Artist",
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false
    },
    image: String
});

const Album = mongoose.model("Album", AlbumSchema);
module.exports = Album;