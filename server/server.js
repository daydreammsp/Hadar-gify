const express = require('express');
const app = express();
let port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
// look in our sever folder (e.g. './') for the code
const gifRouter = require('./routes/gif.router');

// MONGODB CODE - START
const mongoose = require('mongoose');
// Connect to mongodb on port 27017 with the db of hadar (use hadar)

const databaseURL = 'mongodb://localhost:27017/hadar'

// Connect to the database
mongoose.connect(databaseURL);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb!!');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongodb', err);
});
// MONGODB CODE - END

// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This line is required for Angular

// Any traffic coming in on /moped goes to the mopedRouter
app.use('/gifs', gifRouter);

// Spin up the server

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log(`server running on ${port}`);

});