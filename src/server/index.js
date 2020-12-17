let projectData = {}; // Setup empty JS object to act as endpoint for all routes

const express = require('express'); // Require Express to run server and routes
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.use(express.static('dist'));
const port = 8081;

const server = app.listen(port, running);

function running(){
  console.log(`Server is running on localhost:${port}`);
}

// Routes

app.get('/all', sendUserData)

function sendUserData (req, res) {
  res.send(projectData);
  //console.log(projectData);
};

app.post('/add', addUserData)

function addUserData (req, res) {
  projectData = req.body;
  console.log(projectData)
  res.send(JSON.stringify(projectData));



// APIs

  //geonames
  //getWeather
  //pixabay
};
