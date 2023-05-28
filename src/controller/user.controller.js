const express = require("express");
const { getAllData, getDataByID, createData, updateDataByID} = require("../service/user.service");

const route = express.Router();

route.get("/", async (req, res) => {
    try {
       const data =  await getAllData(); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

route.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
       const data =  await getDataByID(id); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

route.post('/', async (req, res) => {
    try {
      const { name, surname, birth, city, age } = req.body;
      const data = await createData(name, surname, birth, city, age);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  });

  route.put('/:id', async (req, res) => {
    try {
      const {id} = req.params;
      const { name, surname, birth, city, age } = req.body;
      const data = await updateDataByID(id, name, surname, birth, city, age);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  });


module.exports = route;