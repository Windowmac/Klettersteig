const userName = document.getElementById('user_name');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const createBtn = document.getElementById('createBtn');
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

