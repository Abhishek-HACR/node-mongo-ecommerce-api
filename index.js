require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log("db connected successfull!"))
.catch((err) => console.log("error connnecting to db" , err)
);

app.listen(5000, () => {
    console.log("backend server is running");
});