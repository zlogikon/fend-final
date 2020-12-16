// Setup empty JS object to act as endpoint for all routes

let data1 = 'This is data1'
let data2 = 'This is data2'
let data3 = 'This is data3'
let projectData = {data1, data2, data3};


// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

//Dependencies

const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initialize the main project folder

app.use(express.static('dist'));

// Setup Server

const port = 8081;

const server = app.listen(port, running);

function running(){
  console.log(`Server is running on localhost:${port}`);
}

app.get('/all', sendUserData)

function sendUserData (req, res) {
  res.send(projectData);
  //console.log(projectData);
};

app.post('/add', addUserData)

function addUserData (req, res) {
    const reqData = req.body;
    console.log(reqData)

    //geonames
    //getWeather
    //pixabay
};
