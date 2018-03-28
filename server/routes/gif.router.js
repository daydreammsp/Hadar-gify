let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Defining what we will accept in our database collection
let gifSchema = new Schema({
    fixed_height_downsapled_url: {type: String},
    
});

// Used to save and retrieve data from the database
let Gif = mongoose.model('Gif', gifSchema); // 'Moped' is the name of our collection

// POST to /movie
router.post('/', (req, res) => {
    console.log('POST /gif', req.body);
    let gifObject = req.body;
    let gifToAdd = new Gif(gifObject);
    // Puts our moped in the database
    gifToAdd.save((err, savedGif) => {
        // savedMovie is populated by mongoose (will contain the _id)
        if(err) {
            console.log('mongodb error', err);
            res.sendStatus(500);
        } else {
            console.log('Saved gif', savedGif);
            res.sendStatus(201);
        }
    });    
});

//update
router.put('/:id', (req,res) =>{
    let gifId = req.params.id;
    let updates = req.body;
    console.log(gifId);
    console.log(updates);
    Task.findByIdAndUpdate(gifId, updates, {new: true}, (err, gifChange) =>{
        if(err){
            console.log('error', err);
            res.sendStatus(500);
        } else{
            console.log(gifChange)
            res.sendStatus(200);
        }
    });
});

//id is rout peramiter
router.delete('/:id', (req,res) =>{
    let gifId = req.params.id;
    Gif.findByIdAndRemove(gifId, (err, gifRemoved) =>{
        if(err){
            console.log('error', err);
            res.sendStatus(500);
        } else{
            res.sendStatus(200);
        }
    });
});


// GET to /movie
router.get('/', (req, res) => {
    console.log('GET gifs');
    let searchCriteria = {}; // {} is everything (no search critera)
    
    Gif.find(searchCriteria, (err, foundTasks) => {
        if(err) {
            console.log('mongodb error', err);
            res.sendStatus(500);
        } else {
            res.send(foundTasks);
        }
    });
});



// GET to /gif/:id
router.get('/:id', (req, res) => {
    console.log('GET movie by id');
    // Find a single movie
    Task.findOne({_id: req.params.id}, (err, foundTask) => {
        if (err) {
            console.log('mongodb error', err);
            res.sendStatus(500);
        } else {
            res.send(foundTask);
        }
    });
});



// Return our router
module.exports = router;
