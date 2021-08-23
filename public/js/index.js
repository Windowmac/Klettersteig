const userName = document.getElementById('username_login');
const password = document.getElementById('pass_login');
const submitBtn = document.getElementById('create-btn');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const createUsername = document.getElementById('username_create');
const createPassword = document.getElementById('pass_create');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');

let userLat = 0;
let userLon = 0;

navigator.geolocation.getCurrentPosition(function (position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  userLat = lat.toFixed(2);
  userLon = lon.toFixed(2);
  console.log(`The coordinates for this location are: ${userLat}, ${userLon}`);
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const body = {};

  if (createUsername.value.length && createPassword.value.length) {
    body.username = createUsername.value;
    body.password = createPassword.value;
    body.first_name = firstName.value;
    body.last_name = lastName.value;
    body.email = email.value;
    
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
  } else {
    window.alert('Please enter your username and password');
    return;
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
    }).then((res) => res.json());
    console.log(response);
    if (response) {
      document.location.replace(`/users/${username}/${userLon}/${userLat}`);
    } else {
      alert('Failed to log in. Please try again.');
    }
  } else {
    alert('Please enter your username and password.');
  }
};

const handleLogout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out. Please try again.');
  }
};

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  handleLogin(userName.value, password.value);
});

logoutBtn.addEventListener('click', (event) => {
  event.preventDefault();
  handleLogout();
});

function openForm() {
  document.getElementById('myForm').style.display = 'block';
};

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
};

// Courtesy of https://codeburst.io/a-simple-star-rating-system-using-vanilla-js-css-and-html-caf1b3e4d9f1
const ratingFunction = (data) => {
  let el = document.getElementById(data.target.id);
  let ratingID = parseInt(element.id);
  let stringID = "";
  let i = 1;
  while (i <= ratingID) {
    stringID = i.toString();
    let goldColor = document.getElementById(stringID);
    goldColor.style.color = "gold";
    i++;
  };
  while (i <= 5) {
    ratingId = i.toString();
    let whiteColor = document.getElementById(stringID);
    white.style.color = "white";
    i++;
  };
  this.averageRating();
};

const averageRating = () => {
  let ratingArr = [];
  let stars = document.getElementsByClassName("stars");
  for (let i = 0; i < stars.length; i++) {
    ratingArr.push(stars[i].style.color);
  }
  this.setState({
    rating: ratingArr.length
  });
};