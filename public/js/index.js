const userName = document.getElementById('user_name');
const password = document.getElementById('password');
const submitBtn = document.getElementById('create-btn');
// const express = require('express');
// const router = require('./routes');
// const sequelize = require('./db/connection');
// const exphbs = require('express-handlebars');
// const { urlencoded } = require('express');
// const hbs = exphbs.create({});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(password.value);
  console.log(userName.value);
  const body = {};
  if (userName.value.length && password.value.length) {
    body.username = userName.value;
    body.password = password.value;
  } else {
    window.alert('enter username and password');
    return;
  }

  try {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  } catch (err) {
    throw new Error(err);
  }
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
};

function closeForm() {
  document.getElementById("myForm").style.display = "none";
};

const buildMap = (westBorder, southBorder, eastBorder, northBorder) => {
  const mapEl = document.createElement('iframe');
  mapEl.width = "425";
  mapEl.height = "350";
  mapEl.frameborder = "0";
  mapEl.scrolling = "no";
  mapEl.marginheight= "0";
  mapEl.marginwidth= "0";
  mapEl.src= `https://www.openstreetmap.org/export/embed.html?bbox=${westBorder}%2C${southBorder}%2C${eastBorder}%2C${northBorder}&amp;layer=mapnik`;
  mapEl.style= "border: 1px, solid, black";

  console.log('made it here!');
  document.body.appendChild(mapEl);
};

buildMap(-123.1522, 45.3471, -122.2691, 45.6676);

// -------------------------------- Sunrise/set API --------------------------------

const testLat = '45.52345';
const testLong = '-122.67621';
// Sunrise/sunset API courtesy of https://sunrise-sunset.org/api
const sunsetAndRise = () => {
  fetch(`https://api.sunrise-sunset.org/json?lat=${testLat}lng=${testLong}`)
  .then(function (response) {
    if (response.status === 404) {
      console.log("Oops! Please try again.")
    } else {
      data = response.json();
      return data;
  }})
  .then(function (data) {
    // console.log(data);
    const lat = data.results.sunrise;
    const long = data.results.sunset;

    // let jsonStr = JSON.stringify({lat: new Date()});   
    // console.log(jsonStr);

    console.log(`Sunrise for this location is at: \n${lat}`);
    console.log(`Sunset for this location is at: \n${long}`);
  });
  // console.log(`Sunset time is ${time}. Sunrise time is ${time}`)
};
// Example: https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
sunsetAndRise();

// -------------------------------- Lat/Long Converter --------------------------------

let sunriseButton = document.getElementById("sunriseBtn");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

const latLongFinder = () => {
  fetch(`https://api.sunrise-sunset.org/json?lat=${testLat}lng=${testLong}`)
  .then(function (response) {
    if (response.status === 404) {
      console.log("Oops! Please try again.")
    } else {
      data = response.json();
      return data;
  }})
  .then(function (data) {
    console.log(data);
  });
};
latLongFinder();

sunriseButton.addEventListener("click", function() {
  

  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
    console.log(lat.toFixed(2));
    console.log(long.toFixed(2));
  });
}



);