const userName = document.getElementById('user_name');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit_btn');
// const express = require('express');
// const router = require('./routes');
// const sequelize = require('./db/connection');
// const exphbs = require('express-handlebars');
// const { urlencoded } = require('express');
// const hbs = exphbs.create({});

// submitBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(password.value);
//   console.log(userName.value);
//   const body = {};
//   if (userName.value.length && password.value.length) {
//     body.username = userName.value;
//     body.password = password.value;
//   } else {
//     window.alert('enter username and password');
//     return;
//   }

//   try {
//     fetch('/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//       });
//   } catch (err) {
//     throw new Error(err);
//   }
// });

// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }

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
    console.log(data);
    const lat = data.results.sunrise;
    const long = data.results.sunset;

    // const testDate3 = new Date('2012-11-29 17:00:34 UTC');
    // testDate3.toString();
    // console.log(testDate3);
    // const testDate2 = new Date(lat);
    // testDate2.toString();
    // console.log(testDate2);
    let jsonStr = JSON.stringify({lat: new Date()});   
    console.log(jsonStr);

    console.log(`Sunrise for this location is at: \n${lat}`);
    // console.log(`Sunrise for this location is at: ${data.results.sunrise}`);
    console.log(`Sunset for this location is at: \n${long}`);
    // console.log(`Sunset for this location is at: ${data.results.sunset}`);
    // console.log(`Test conversion of latitude for sunrise/sunset hours to local time: ${lat}`);
    // console.log(`Test conversion of longitude for sunrise/sunset hours to local time: ${long}`);

    let date = new Date(Date.UTC(2021, 5, 28, 3, 0, 0));
    console.log(`5/28/2021 in India time: \n${date}`); // This seems to yield incorrect time from date
    let usDate = date.toLocaleString("en-US", {timeZone: "America/New_York"});
    console.log('India time converted to NYC time: ' + usDate);

    let date2 = new Date(Date.UTC(lat)).toLocaleString("en-US", {timeZone: "America/New_York"});
    console.log(`Local sunrise time for your location is: \n${date2}`);

    // const localLat = new Date(lat);
    // const localLong = new Date(long);
    const UTCtime = 'Tue, 21 Apr 2020 09:20:30 GMT';
    const testDate = new Date(UTCtime);
    console.log(`UTC test time as a string is \n${UTCtime}`);
    console.log(`Test date in local time is: \n${testDate.toString()}`);
    // console.log(`Local sunrise time for your location is: \n${localLat.toString()}`);
    // console.log(`Local sunset time for your location is: \n${localLong.toString()}`);
    // console.log(date.toUTCString());

    const dt = new Date(lat);
    console.log(dt.toString());
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
// latLongFinder();

// function codeAddress() {
//   const address = document.getElementById("address").value;
//   const geocoder = new google.maps.Geocoder();

//   geocoder.geocode( {'address': address}, function(results, status) {
//     const location = results[0].geometry.location;
//     // alert('LAT: ' + location.lat() + ' LANG: ' + location.lng());
//     console.log('LAT: ' + location.lat() + ' LANG: ' + location.lng());
//   });
// };
// google.maps.event.addDomListener(window, 'load', codeAddress);

// Map generator API courtesy of https://openlayers.org/
// const mapGenerator = () => {
//   fetch(`http://dev.virtualearth.net/REST/v1/Locations?query=${locationQuery}&key=ApHLq6AdBn19nzxj0QMLkB3xlzKtOGaaq4IfWgmnyXQ2g5She2mdmS-mHBkfudks`)
//   .then(function (response) {
//     if (response.status === 404) {
//       console.log("Oops! Please try again.")
//     } else {
//       data = response.json();
//       return data;
//   }})
//   .then(function (data) {
//     console.log(data);
//   });
// };
// mapGenerator();
// (`${https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
// &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
// &markers=color:red%7Clabel:C%7C40.718217,-73.998284
// &key=YOUR_API_KEY}`)