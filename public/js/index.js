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
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



const buildMap = () => {
  const mapEl = document.createElement('iframe');
  mapEl.width = "425";
  mapEl.height = "350";
  mapEl.frameborder = "0";
  mapEl.scrolling = "no";
  

  const map = <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-123.15220643766226%2C45.34718457473261%2C-122.2691803146154%2C45.667670951364165&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=11/45.5077/-122.7107">View Larger Map</a></small>

getMapApi();