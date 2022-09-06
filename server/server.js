//Import server code: Express and cors

const express = require('express');
const cors = require('cors'); // Cross Origin Resource Sharing

//Invoke express variable and save to app variable 

const app = express();

// Set up Middleware

app.use(express.json()) // Allows server to except JSON objects
app.use(cors())// Allows server to activate cors

// Open door for server to receive requests

app.listen(5050, () => {
    console.log('Sever is running on port 5050');
})