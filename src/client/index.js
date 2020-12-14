import { postData } from './js/functions'
import { getDate } from './js/functions'
import { getWeather } from './js/functions'
import { updateUI } from './js/functions'

import './styles/style.scss'

console.log("CHANGE!!");

export {
    getWeather,
    postData,
    updateUI,
    getDate
    
}

genBttn.addEventListener("click", function() {
    feelings = document.getElementById('feelings').value;
    zip = document.getElementById('zip').value;
    owAPI = owURL+zip+owCountry+appid+owKey;
      
    //for testing
    
    console.log(zip);
    console.log(feelings);
    //document.getElementById("date").innerHTML = "Date: " + newDate;
    //document.getElementById("temp").innerHTML = "Weather: " + myWeather + " &#8457;";
    //document.getElementById("content").innerHTML = "Journal entry: " + feelings;
  
    getDate()
    getWeather()
    .then(() => {
      //console.log(data)
      postData('/add', {newDate, feelings, myWeather});
    })
    .then(() => {
      updateUI()
    })
    
      
    
  });