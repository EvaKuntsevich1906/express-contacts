const express = require("express");
const { getAllData } = require("../service/user.service");

const route = express.Route();

route.get("/", async (req, res) => {
    try {
       const data =  await getAllData(); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
})


// route.get = ("/:id", async (req, res) => {
//     try {
//         const data =  await getAllDate(); 
//         res.send(data);
//      } catch (err) {
//          res.status(404).send(err.message)
//      }
// })


// route.post = ("/", (req, res) => {

// })


// route.put = ("/:id", (req, res) => {

// })


// route.delete = ("/:id", (req, res) => {

// })
module.exports = route;