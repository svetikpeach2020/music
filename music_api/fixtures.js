const mongoose = require("mongoose");
const config = require("./config");

const Artist = require("./models/Artist");
const Album = require("./models/Album");
const Track = require("./models/Track");
const TrackHistory = require("./models/TrackHistory");
const User = require("./models/User");

mongoose.connect(`${config.db.url}/${config.db.name}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.once("open", async () => {
    try {
        await db.dropCollection("albums");
        await db.dropCollection("artists");
        await db.dropCollection("users");
        await db.dropCollection("tracks");
        await db.dropCollection("trackhistories");
    } catch (e) {
        console.log("Collection were not present. Skipping drop ....");
    }

    const [samArtist, aoaArtist] = await Artist.create({
        name: "SamKim",
        photo: "Sam_Kim.jpg",
        description: "(Korean: 샘김; born February 19, 1998) is a Korean–American singer-songwriter and guitarist. He is signed under Antenna Music."
    }, {
        name: "AOA",
        photo: "AOA.png",
        description: "(Korean: 에이오에이; an acronym for Ace of Angels) is a South Korean girl group formed by FNC Entertainment."
    });

    const [user, admin] = await User.create({
        username: "user",
        password: "user",
        role: "user",
        avatarImage: "avatar1.png",
        displayName: "User"
    }, {
        username: "admin",
        password: "admin",
        role: "admin",
        avatarImage: "avatar2.png",
        displayName: "Admin"
    });

    const [I_A_S, S_A_M_Part1, S_A_M, A_OF_AN, RUNWAY, Knock] = await Album.create({
        title: "I Am Sam",
        artist: samArtist._id,
        image: "I_Am_Sam_(EP).jpg",
        year: 2016
    }, {
        title: "Sun and Moon Part.1",
        artist: samArtist._id,
        image: "SunMOON_1.jpg",
        year: 2018
    }, {
        title: "Sun and Moon",
        artist: samArtist._id,
        image: "S_A_M.jpg",
        year: 2018
    }, {
        title: "Ace of Angels",
        artist: aoaArtist._id,
        image: "A_of_Angels.jpg",
        year: 2015
    }, {
        title: "Angel’s Knock",
        artist: aoaArtist._id,
        image: "Knock.jpg",
        year: 2017
    }, {
        title: "Runway",
        artist: aoaArtist._id,
        image: "RUNAWAY.jpg",
        year: 2016
    });

   const [
       NO_Sens, Touch_My_Body, DANCE, Mama, Seattle,
       Sun_And_Moon, Sunny_Days, Make_Up, Your_Song, Who_Are_You,
       Its_You, The_One, Rainy_Days, If, Where,
       Oh_Boy, Heart_Attack, Elvis, Joa_Yo, Get_out, Bing_Bing,
       Luv_Me, Short_Hair, Lemon_Slush, Excuse_Me, Confused, Cherry_Pop,
       Like_a_Cat, You_Know_That, Stay_with_Me, Miniskirt, Good_Luck] = await Track.create({
        title: "No Sense",
        album: I_A_S._id,
        longtime: 219,
        numTrack: 1
    }, {
       title: "Touch My Body",
       album: I_A_S._id,
       longtime: 204,
       numTrack: 3
   }, {
        title: "Dance",
        album: I_A_S._id,
        longtime: 189,
        numTrack: 2
    }, {
       title: "Mama Don't Worry",
       album: I_A_S._id,
       longtime: 245,
       numTrack: 4
   }, {
       title: "Seattle",
       album: I_A_S._id,
       longtime: 308,
       numTrack: 5
   }, {
       title: "Sun And Moon",
       album: S_A_M_Part1._id,
       longtime: 301,
       numTrack: 3
   }, {
       title: "Sunny Days, Summer Nights",
       album: S_A_M_Part1._id,
       longtime: 249,
       numTrack: 1
   }, {
       title: "Make Up (feat. Crush)",
       album: S_A_M_Part1._id,
       longtime: 207,
       numTrack: 2
   }, {
       title: "Your Song",
       album: S_A_M_Part1._id,
       longtime: 207,
       numTrack: 4
   }, {
       title: "Who Are You",
       album: S_A_M_Part1._id,
       longtime: 255,
       numTrack: 5
   }, {
       title: "It's You (Feat. Zico)",
       album: S_A_M._id,
       longtime: 257,
       numTrack: 1
   }, {
       title: "The One",
       album: S_A_M._id,
       longtime: 259,
       numTrack: 2
   }, {
       title: "Rainy Days",
       album: S_A_M._id,
       longtime: 231,
       numTrack: 3
   }, {
       title: "If",
       album: S_A_M._id,
       longtime: 335,
       numTrack: 5
   }, {
       title: "Where's My Money",
       album: S_A_M._id,
       longtime: 349,
       numTrack: 4
   }, {
       title: "Oh Boy",
       album: A_OF_AN._id,
       longtime: 211,
       numTrack: 3
   }, {
       title: "Heart Attack",
       album: A_OF_AN._id,
       longtime: 197,
       numTrack: 2
   }, {
       title: "Elvis",
       album: A_OF_AN._id,
       longtime: 203,
       numTrack: 1
   }, {
       title: "Joa Yo!",
       album: A_OF_AN._id,
       longtime: 262,
       numTrack: 4
   }, {
       title: "Get Out",
       album: A_OF_AN._id,
       longtime: 216,
       numTrack: 5
   }, {
       title: "Bing Bing",
       album: A_OF_AN._id,
       longtime: 225,
       numTrack: 6
   }, {
       title: "Luv Me",
       album: RUNWAY._id,
       longtime: 212,
       numTrack: 3
   }, {
       title: "Short Hair",
       album: RUNWAY._id,
       longtime: 217,
       numTrack: 2
   }, {
       title: "Lemon Slush",
       album: RUNWAY._id,
       longtime: 193,
       numTrack: 1
   }, {
       title: "Excuse Me",
       album: RUNWAY._id,
       longtime: 227,
       numTrack: 4
   }, {
       title: "Confused",
       album: RUNWAY._id,
       longtime: 245,
       numTrack: 5
   }, {
       title: "Cherry Pop",
       album: RUNWAY._id,
       longtime: 197,
       numTrack: 6
   }, {
       title: "Like a Cat",
       album: Knock._id,
       longtime: 221,
       numTrack: 1
   }, {
       title: "You Know That",
       album: Knock._id,
       longtime: 205,
       numTrack: 2
   }, {
       title: "Stay with Me",
       album: Knock._id,
       longtime: 199,
       numTrack: 3
   }, {
       title: "Miniskirt",
       album: Knock._id,
       longtime: 181,
       numTrack: 4
   }, {
       title: "Good Luck",
       album: Knock._id,
       longtime: 241,
       numTrack: 5
   });

   await TrackHistory.create({
       user: user._id,
       track: Sun_And_Moon._id,
       datetime: "2020-07-02T16:46:33.054+00:00"
   }, {
       user: user._id,
       track: The_One._id,
       datetime: "2020-07-02T17:44:15.424+00:00"
   }, {
       user: user._id,
       track: You_Know_That._id,
       datetime: "2020-07-17T10:31:05.160+00:00"
   }, {
       user: admin._id,
       track: Heart_Attack._id,
       datetime: "2020-07-19T10:39:05.160+00:00"
   }, {
       user: admin._id,
       track: Miniskirt._id,
       datetime: "2020-07-19T10:40:22.504+00:00"
   }, {
       user: admin._id,
       track: Elvis._id,
       datetime: "2020-07-02T16:46:33.054+00:00"
   }, {
       user: admin._id,
       track: Oh_Boy._id,
       datetime: "2020-07-18T10:30:05.110+00:00"
   })

    db.close();
});