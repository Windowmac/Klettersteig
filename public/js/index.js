const userName = document.getElementById('username_login');
const password = document.getElementById('pass_login');
const submitBtn = document.getElementById('create-btn');
const loginBtn = document.getElementById('loginBtn');
// const express = require('express');
// const router = require('./routes');
// const sequelize = require('./db/connection');
// const exphbs = require('express-handlebars');
// const { urlencoded } = require('express');
// const hbs = exphbs.create({});

let userLat = 0;
let userLon = 0;

  navigator.geolocation.getCurrentPosition(function(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  userLat = lat.toFixed(2);
  userLon = lon.toFixed(2);
  console.log(`The coordinates for this location are: ${userLat}, ${userLon}`);
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  let body = {};
  console.log(password.value);
  console.log(userName.value);
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

const handleLogin = async (username, password) => {
  const body = {
    username: username,
    password: password,
  };
  console.log(body);

  if (body.username.length && body.password.length) {
    const response = await fetch(`/api/users/sign-in/${username}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json());
    console.log(response);
    if (response) {
      document.location.replace(`/users/${username}/${userLon}/${userLat}`);
    } else {
      alert('Failed to log in.');
    }
  } else {
    alert('enter username and password');
  }
};

loginBtn.addEventListener('click', (event) => {
  event.preventDefault()
  handleLogin(userName.value, password.value);
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
};

function closeForm() {
  document.getElementById("myForm").style.display = "none";
};


// -------------------------------- Lat/Long Converter --------------------------------


// -------------------------------- Favorite Button --------------------------------

const favButton = document.getElementById("favButton");
