# Weather-Journal App Project

This project was created as a capstone project for Udacity's Front End Design Nanodegree program.

The project was designed to give experience working with the following technologies and concepts:

<ul>
<li>Webpack</li>
<li>Node.js</li>
<li>Web APIs</li>
<li>Responsive web design</li>
<li>Sass stylesheets</li>
<li>Jest testing</li>
<li>Service workers to allow offline access</li>
</ul>

## Overview
This project takes 3 items of user input: a destination, a travel start date, and an end date. The app then retrieves data from 3 APIs: Geonames, Pixabay, and Weatherbit. The server returns the data and the webpage is updated with an image of the destination, weather predictions, and travel dates. Travel dates also include the duration of the trip and a countdown.

## APIs used in this project
<a href="http://www.geonames.org/export/web-services.html">Geonames</a>

<a href="https://www.weatherbit.io/">Weatherbit</a>

<a href="https://pixabay.com/api/docs/">Pixabay</a>

## How to run the project

Note: I used <a href='https://code.visualstudio.com/'>Visual Studio Code</a> to create this project and I highly recommend others use it to run the project as well.

<ol>
<li>Clone this repo to your local machine</li>
<li>Run npm install for the required packages which are listed in full in the package.json file</li>
<li>Build the production server with npm run build-prod</li>
<li>Create a .env file in the root directory and add API keys for the APIs listed above.</li>
<li>Start the server with npm start</li>
<li>The server should run on localhost:8081 in your web browser</li>
</ol>
