const dotenv = require('dotenv');
dotenv.config();

let projectData = {}; // Setup empty JS object to act as endpoint for all routes

let userData = {};

let location = ''

let destName = ''
let destCode = ''
let destCoun = ''
let destPic = ''
let destLong = ''
let destLat = ''
let dest1Day = ''
let dest16Day = ''

let sendToClient = ''

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



function sendUserData (req, res) {
  res.send(sendToClient);
  //console.log(projectData);
};

app.get('/all', sendUserData)


const addUserData = async (req, res) => {
  userData = req.body;
  //console.log(projectData)
  res.send(JSON.stringify(userData))

  await geonamesAPI()

  await pixAPI()

  await bitAPI()

  sendToClient = {destName, destCoun, destPic, dest1Day, dest16Day}

  console.log(sendToClient)

  

};

app.post('/add', addUserData)

// APIs

const geonamesAPI = async () => {
  const baseURL = "http://api.geonames.org/searchJSON?q="
  const addonURL = "&maxRows=1&username="
  const geonamesKey = process.env.GEO_KEY
  const loc = userData.destination
  location = loc.replace(' ', '%20')

  const fullURL = baseURL + location + addonURL + geonamesKey

  //console.log(fullURL)

  const request = await fetch(fullURL)

  try {
    const data = await request.json();
    destName = data.geonames[0].name
    destCode = data.geonames[0].countryCode
    destCoun = data.geonames[0].countryName
    destLong = data.geonames[0].lng
    destLat = data.geonames[0].lat


    //console.log(destName);
    //console.log(destCoun);
    //console.log(destCode);
    return data;
    
  }catch(error){
    console.log("uh oh.... geonamesAPI error", error);
  }
};

const pixAPI = async () => {
  // https://pixabay.com/api/?key=19558180-774462f6ab418b26e45468266&q=yellow+flowers&image_type=photo
  const pixURL = "https://pixabay.com/api/?key="
  const pixKey = process.env.PIX_KEY
  const addon1 = "&q="
  const addon2 = "&image_type=photo"

  const fullURL = pixURL + pixKey + addon1 + location + addon2

  //console.log(fullURL)

  const request = await fetch(fullURL)

  try {
    const data = await request.json();
    destPic = data.hits[0].webformatURL
    
    //console.log(destPic);
    
    return data;
    
  }catch(error){
    console.log("uh oh....pixAPI error", error);
  }
}

const bitAPI = async () => {
  //https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY
  const bitURL = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&"
  const bitKey = process.env.BIT_KEY
  
  const fullURL = `${bitURL}&lat=${destLat}&lon=${destLong}&key=${bitKey}`
  
  //console.log(fullURL)

  const request = await fetch(fullURL)

  try {
    const apiData = await request.json();
    dest1Day = [apiData.data[0].high_temp, apiData.data[0].low_temp]
    dest16Day = [apiData.data[15].high_temp, apiData.data[15].low_temp]
    
    //console.log(dest1Day);
    //console.log(dest16Day);
    
    return apiData;
    
  }catch(error){
    console.log("uh oh....bitAPI error", error);
  }


}







  //geonames
  //getWeather
  //pixabay

