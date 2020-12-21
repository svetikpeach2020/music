const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const artists = require("./app/artists");
const albums = require("./app/albums");
const tracks = require("./app/tracks");
const users = require("./app/users");
const track_history = require("./app/track_history");
const admin = require("./app/admin");
const config = require("./config");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

mongoose.connect(`${config.db.url}/${config.db.name}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log("Mongoose connected");
        app.use("/artists", artists());
        app.use("/albums", albums());
        app.use("/tracks", tracks());
        app.use("/users", users());
        app.use("/track_history", track_history());
        app.use("/admin", admin());
        app.listen(PORT, () => {
            console.log("Server started at http://localhost:" + PORT);
        });
    });





