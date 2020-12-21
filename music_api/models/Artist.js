const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    photo: String,
    description: String,
    isPublished: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Artist = mongoose.model("Artist", ArtistSchema);
module.exports = Artist;