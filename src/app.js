const express = require("express");
const user = require("../src/controller/user.controlter");
const bodyParser = require("body-parser");


const app = express(); 

app.use(bodyParser.json());

app.use("/user", user); 

app.use((err, req, res, next) => {
    res.send(err.message)
}); 


module.exports = app;