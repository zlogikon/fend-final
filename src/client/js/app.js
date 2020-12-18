let startDate = "";
let endDate = "";
let destination = "";
let daysTill = "";
let duration = "";
let d1 = "";
let d2 = "";

/*export const getReady = async () => {
  console.log('Getting ready to post....')
  
};*/

export const formHandler = async (event) => {
  event.preventDefault();
  
  // Data collected from form
  startDate = new Date(document.getElementById('start').value);
  endDate = new Date(document.getElementById('end').value);
  destination = document.getElementById('dest').value;

  const dataForServer = {destination,startDate,endDate}
  
  console.log('Form Handled. Getting dates...')

  await getDate()

  console.log('Dates Handled. Posting data...')

  await postData('http://localhost:8081/add', dataForServer )

  const getData = await fetch(`http://localhost:8081/all`)

  console.log('Data Posted.')

  await updateUI()
  
  
};

export const postData = async (url, data)=>{
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
    
export const updateUI = async () => {
  console.log('Ready to update UI')
  const request = await fetch('http://localhost:8081/all')
  
  try{
      const allData = await request.json()
      
      console.log(allData)
    
      document.getElementById("disDest").innerHTML = `Destination: ${allData.destName}`;
      document.getElementById("disStart").innerHTML = `Start Date: ${d1}`
      document.getElementById("disEnd").innerHTML = `End Date: ${d2}`
      document.getElementById("disDur").innerHTML = `Trip Duration: ${(duration)} days`;
      document.getElementById("disTill").innerHTML = `Countdown: About ${Math.ceil(daysTill)} day(s)`;
      
    }catch(error){
      console.log("updateUI error", error)
  } 
}

export const getDate = async () =>{

  let d = new Date();

  duration = (endDate.getTime() - startDate.getTime())/60000/60/24;
  daysTill = (startDate.getTime() - d.getTime())/60000/60/24;

  d1 = `${startDate.getMonth()}/${startDate.getDate()}/${startDate.getFullYear()}`
  d2 = `${endDate.getMonth()}/${endDate.getDate()}/${endDate.getFullYear()}`

  let newDate = d.getMonth()+'/'+ d.getDate()+'/'+ d.getFullYear()
};

export const cancel = () => {
  let qq = confirm("Are you sure you want to cancel your trip?")
  if (qq == true){
    document.getElementById("disDest").innerHTML = '';
    document.getElementById("disStart").innerHTML = '';
    document.getElementById("disEnd").innerHTML = '';
    document.getElementById("disDur").innerHTML = '';
    document.getElementById("disTill").innerHTML = '';
    alert("Yourtrip has been cancelled.")
  }else{

  }
};

