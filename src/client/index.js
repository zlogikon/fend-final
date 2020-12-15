import { postData } from './js/app'
import { getWeather } from './js/app'
import { updateUI } from './js/app'

import './styles/style.scss'

console.log("CHANGE!!");

export {
    getWeather,
    postData,
    updateUI,
    
    
}

const genBttn = document.getElementById("generate");

genBttn.addEventListener("click", function() {
    // Data collected from user
    const startDate = new Date(document.getElementById('start').value);
    const endDate = new Date(document.getElementById('end').value);
    const destination = document.getElementById('dest').value;
       
    // Dates used in results
    const d = new Date();
    const duration = (endDate.getTime() - startDate.getTime())/60000/60/24;
    const hoursTill = (startDate.getTime() - d.getTime())/60000/60/24;
    const d1 = startDate.toUTCString().split('00');
    const d2 = endDate.toUTCString().split('00');

    //const owAPI = owURL+zip+owCountry+appid+owKey;
      
    //for testing
    //console.log(d);
    //console.log(startDate);
    //console.log(endDate);

    document.getElementById("disDest").innerHTML = `Destination: ${destination}`;
    document.getElementById("disStart").innerHTML = `Start Date: ${d1[0]}`
    document.getElementById("disEnd").innerHTML = `End Date: ${d2[0]}`
    document.getElementById("disDur").innerHTML = `Trip Duration: ${(duration)} days`;
    document.getElementById("disTill").innerHTML = `Countdown: About ${Math.ceil(hoursTill)} days`;
  
    
    
  postData('/add', {destination, startDate, endDate})
    .then(() => {
      updateUI()   
    });
  });

cancel.addEventListener("click", function() {
  document.getElementById("disDest").innerHTML = '';
  document.getElementById("disStart").innerHTML = '';
  document.getElementById("disEnd").innerHTML = '';
  document.getElementById("disDur").innerHTML = '';
  document.getElementById("disTill").innerHTML = '';
  alert("Your trip has been cancelled.")
  
});