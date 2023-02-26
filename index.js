const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// imports handlers
const {getPosts, addPosts, addStories, getSories} = require("./handlers/home.js");
const {likedPost, disLikedPost, addComments, bookmarkedPost, disBookmarkedPost, searchPost, getDetailPost} = require("./handlers/post");
const {getNotification} = require("./handlers/notification");
const {addUser, getUserProfile, addTokenFCM} = require('./handlers/user');


app.get('/get-posts', getPosts);
app.post('/get-detail-post', getDetailPost);
app.get('/get-stories', getSories);
app.post('/add-posts', addPosts);
app.post('/add-stories', addStories);
app.post('/like-post', likedPost);
app.post('/unlike-post', disLikedPost);
app.post('/add-comment', addComments);
app.post('/bookmark-post', bookmarkedPost);
app.post('/disBookmark-post', disBookmarkedPost);
app.post('/get-notification', getNotification);
app.post('/add-user', addUser);
app.post('/get-user-profile', getUserProfile);
app.post('/search', searchPost);
app.post("/add-token-fcm", addTokenFCM);


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))