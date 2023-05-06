////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const People = require("../models/people");
const router = express.Router();

// ROUTES////////////////////////////////
    // GET
router.get('/', async(req, res) => {
    try {
        res.json(await People.find({})).status(200)
    } catch(error) {
        res.status(400).json(error)
        console.log('error',error)
    } finally {
        console.log('this is finally')
    }

})
 
//POST
router.post('/:id', async(req, res) => {
    res.json({message: "POST"})
    try {
        // send all people
        res.json(await People.create(req.body));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
    });


//PUT
router.put('/:id', async(req, res) => {
    res.json({message: "PUT"})
})

//DELETE
router.delete('/:id', async(req, res) => {
    res.json({message: "DELETE"})
})

module.exports = People;