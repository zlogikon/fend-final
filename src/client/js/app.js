export const cancel = () => {
  document.getElementById("disDest").innerHTML = '';
  document.getElementById("disStart").innerHTML = '';
  document.getElementById("disEnd").innerHTML = '';
  document.getElementById("disDur").innerHTML = '';
  document.getElementById("disTill").innerHTML = '';
  alert("Your trip has been cancelled.")
  
};

export const formHandler = async (event) => {
  event.preventDefault();

  // Data collected from user
  const startDate = new Date(document.getElementById('start').value);
  const endDate = new Date(document.getElementById('end').value);
  const destination = document.getElementById('dest').value;
     
  // Dates used in results
  const d = new Date();
  const duration = (endDate.getTime() - startDate.getTime())/60000/60/24;
  const hoursTill = (startDate.getTime() - d.getTime())/60000/60/24;
  const d1 = startDate.toUTCString().slice(0,17);
  const d2 = endDate.toUTCString().slice(0,17);

  //const owAPI = owURL+zip+owCountry+appid+owKey;
    
  // for testing
  //console.log(d1);
  //console.log(d2);
  //console.log(startDate);
  //console.log(endDate);

  document.getElementById("disDest").innerHTML = `Destination: ${destination}`;
  document.getElementById("disStart").innerHTML = `Start Date: ${d1}`
  document.getElementById("disEnd").innerHTML = `End Date: ${d2}`
  document.getElementById("disDur").innerHTML = `Trip Duration: ${(duration)} days`;
  document.getElementById("disTill").innerHTML = `Countdown: About ${Math.ceil(hoursTill)} days`;

  console.log('Form Handled!!')

  const dataForServser = {destination,startDate,endDate}

  postData('http://localhost:8081/add', dataForServser)
      .then(() => {
        updateUI()
        });
  
  
};

const postData = async (url, data)=>{
  console.log('Data to server: ',data)
    const post = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
      const newData = await post.json();
      //console.log('Data okay!',newData);
      return newData
    }catch(error) {
      console.log("JSON confirmation error", error);
      URLResult.innerHTML = "Please confirm the URL is a working webpage"
    }
}
    
const updateUI = async () => {
  console.log('Ready to update UI')
  const request = await fetch ('http://localhost:8081/all')
  
  try{
      const allData = await request.json()
      
      const conf = allData.confidence;
      const subj = allData.subjectivity;
      const score = allData.score_tag;
      //console.log(allData)
       
      document.getElementById("conf").innerHTML = `Confidence: ${conf}`
      document.getElementById("subj").innerHTML = `Subjectivity: ${subj}`;
      document.getElementById("score").innerHTML = `Polarity Score: ${Client.scoreUpdate(score)}`;
      
    }catch(error){
      console.log("updateUI error", error)
  } 
}