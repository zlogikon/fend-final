let startDate = "";
let endDate = "";
let destination = "";
let hoursTill = "";
let duration = "";

export const getReady = async () => {
  console.log('Getting ready to post....')
  
};

export const formHandler = async (event) => {
  event.preventDefault();
  const d = new Date();

  // Data collected from user
  startDate = new Date(document.getElementById('start').value);
  endDate = new Date(document.getElementById('end').value);
  destination = document.getElementById('dest').value;
  duration = (endDate.getTime() - startDate.getTime())/60000/60/24;
  hoursTill = (startDate.getTime() - d.getTime())/60000/60/24;
     
  // Dates used in results
  
  
  const d1 = startDate.toUTCString().slice(0,17);
  const d2 = endDate.toUTCString().slice(0,17);

  //const owAPI = owURL+zip+owCountry+appid+owKey;
    
  // for testing
  //console.log(d1);
  //console.log(d2);
  //console.log(startDate);
  //console.log(endDate);

  console.log('Form Handled!!')

  const dataForServer = {destination,startDate,endDate}


  getReady()
  .then(() => {
    //console.log(data)
    postData('http://localhost:8081/add', dataForServer)
    console.log('Data posted. Updating UI....')
  })
  .then(() => {
    updateUI()
  })

  
  
  
};

const postData = async (url, data)=>{
  //console.log('Data to server: ',data)
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      console.log('Data okay!', newData);
      return newData
    }catch(error) {
    console.log("error", error);
    
    }    
};
    
const updateUI = async () => {
  console.log('Ready to update UI')
  const request = await fetch ('http://localhost:8081/all')
  
  try{
      const allData = await request.json()
      
      console.log(allData)

      //console.log(allData)
       
      document.getElementById("disDest").innerHTML = `Destination: ${destination}`;
      document.getElementById("disStart").innerHTML = `Start Date: ${startDate.toUTCString().slice(0,17)}`
      document.getElementById("disEnd").innerHTML = `End Date: ${endDate.toUTCString().slice(0,17)}`
      document.getElementById("disDur").innerHTML = `Trip Duration: ${(duration)} days`;
      document.getElementById("disTill").innerHTML = `Countdown: About ${Math.ceil(hoursTill)} days`;
      
    }catch(error){
      console.log("updateUI error", error)
  } 
}

export const cancel = () => {
  document.getElementById("disDest").innerHTML = '';
  document.getElementById("disStart").innerHTML = '';
  document.getElementById("disEnd").innerHTML = '';
  document.getElementById("disDur").innerHTML = '';
  document.getElementById("disTill").innerHTML = '';
  alert("Your trip has been cancelled.")
  
};

