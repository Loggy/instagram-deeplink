"use strict";
exports.__esModule = true;
var express = require("express");
var index_1 = require("../src/index");
var app = express();
app.use('/insta', index_1.instagramDeeplink);
app.listen(3000, function () {
    console.log('Try to visit http://<your_ip>:3000/insta/username from your iOS device to open @username instagram profile directly in the app');
});
