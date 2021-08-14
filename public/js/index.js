const userName = document.getElementById('user_name');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit_btn');
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
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const testLat = '45.52345';
const testLong = '-122.67621';
// Sunrise/sunset API courtesy of https://sunrise-sunset.org/
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
    console.log(data);
    const lat = data.results.sunrise;
    const long = data.results.sunset;
    // new Date(lat).toISOString();
    // new Date(long).toISOString();
    console.log(`Sunrise for this location is at: ${lat}`);
    // console.log(`Sunrise for this location is at: ${data.results.sunrise}`);
    console.log(`Sunset for this location is at: ${long}`);
    // console.log(`Sunset for this location is at: ${data.results.sunset}`);

    let date = new Date(Date.UTC(2021, 5, 28, 3, 0, 0));
    let date = new Date(Date.UTC(lat));
    console.log('Date in India: ' + date);
    let usDate = date.toLocaleString("en-US", {timeZone: "America/New_York"});
    console.log('Date in USA: ' + usDate);

    const localLat = new Date(lat);
    const localLong = new Date(long);
    const UTCtime = 'Tue, 21 Apr 2020 09:20:30 GMT';
    const testDate = new Date(UTCtime);
    console.log(`UTC test time is \n${UTCtime}`);
    console.log(`Test date is: \n${testDate.toString()}`);
    console.log(`Local sunrise time for your location is: \n${localLat.toString()}`);
    console.log(`Local sunset time for your location is: \n${localLong.toString()}`);
    // console.log(date.toUTCString());
  });
  // console.log(`Sunset time is ${time}. Sunrise time is ${time}`)
};
// Convert UTC to user's time zone? Or to that area's time zone?
// Allow user to enter their preferred day to call from? API can take another parameter
// Example: https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
sunsetAndRise();

// Latitude and longitude API courtesy of 
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

// Map generator API courtesy of https://openlayers.org/
const mapGenerator = () => {
  fetch(`http://dev.virtualearth.net/REST/v1/Locations?query=${locationQuery}&key=ApHLq6AdBn19nzxj0QMLkB3xlzKtOGaaq4IfWgmnyXQ2g5She2mdmS-mHBkfudks`)
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
mapGenerator();