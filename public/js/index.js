const userName = document.getElementById('user_name');
const password = document.getElementById('password');
const submitBtn = document.getElementById('create-btn');
// const express = require('express');
// const router = require('./routes');
// const sequelize = require('./db/connection');
// const exphbs = require('express-handlebars');
// const { urlencoded } = require('express');
// const hbs = exphbs.create({});

createBtn.addEventListener('click', (event) => {
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

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();

  let body = {};
  if (userName.value && password.value) {
    body.username = userName.value;
    body.password = password.value;

  } else {
    window.alert('enter username and password');
    return;
  }
  try {
    fetch('/api/sign-in', {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.parse(body),
    })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
  } catch (err) {
    throw new Error(err);
  }
  console.log(password.value);
  console.log(userName.value);
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



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

}

buildMap(-123.1522, 45.3471, -122.2691, 45.6676);

