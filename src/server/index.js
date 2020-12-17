const dotenv = require('dotenv');
dotenv.config();

let projectData = {}; // Setup empty JS object to act as endpoint for all routes

let destName = ''
let destCode = ''
let destCoun = ''

const express = require('express'); // Require Express to run server and routes
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch')


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

const addUserData = async (req, res) => {
  projectData = req.body;
  console.log(projectData)
  res.send(JSON.stringify(projectData));

  await geonamesAPI();

  await pixAPI();

};

// APIs

const geonamesAPI = async () => {
  const baseURL = "http://api.geonames.org/searchJSON?q="
  const addonURL = "&maxRows=1&username="
  const geonamesKey = process.env.GEO_KEY
  const loc = projectData.destination
  const location = loc.replace(' ', '%20')

  const fullURL = baseURL + location + addonURL + geonamesKey

  console.log(fullURL)

  const request = await fetch(fullURL)

  try {
    const data = await request.json();
    destName = data.geonames[0].name
    destCode = data.geonames[0].countryCode
    destCoun = data.geonames[0].countryName



    console.log(destName);
    console.log(destCoun);
    console.log(destCode);
    return data;
    
  }catch(error){
    console.log("uh oh....error", error);
  }
};





  //geonames
  //getWeather
  //pixabay

