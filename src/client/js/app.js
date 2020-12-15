/* Global Variables */

const owKey = "&units=imperial"; // Open Weather API is private
const owURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const owCountry = ",US";
const appid = "&appid="
const genBttn = document.getElementById("generate");

let zip = "";
let feelings = "";
let owAPI = "";
let myWeather = "";
let newDate = "";

// Generate data and execute asynchronous scripts

// Get weather from openweather api

export const getWeather = async () => {
  const request = await fetch(owAPI);
  try {
    const data = await request.json();
    myWeather = Math.floor(data.main.temp.toFixed(0));
    console.log(myWeather);
    return data;
    
  }catch(error){
    console.log("uh oh....error", error);
  }
};

// Create date

//Post data to the server

export const postData = async ( url = '', data = {}) => {
  //console.log(data)
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),   
  });

  try {
    const newData = await response.json();
    // console.log(newData);
    return newData
  }catch(error) {
  console.log("error", error);
  
  }
};

//Get data from server and update the webpage

export const updateUI = async () => {
  const request = await fetch ('/all')
  try{
    const allData = await request.json()
    //console.log(allData);
    document.getElementById("date").innerHTML = "Date: " + allData.newDate;
    document.getElementById("temp").innerHTML = "Weather: " + allData.myWeather + " &#8457;";
    document.getElementById("content").innerHTML = "Journal entry: " + allData.feelings;
  }catch(error){
    console.log("error", error)
  }
}


