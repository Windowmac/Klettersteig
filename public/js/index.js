const userName = document.getElementById('user_name');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit_btn');

const createUser = (userName, password) => {
  console.log(userName);
  if (userName.length && password.length) {
    const body = {};
    body.user_name = userName.value;
    body.password = password.value;
  } else {
    window.alert('enter username and password');
    return;
  }

  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => 
    res.json()).then((result) => {
      console.log(result);
    });
  };


// API courtesy of https://sunrise-sunset.org/
const sunsetAndRise = (lat, long) => {
  fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  console.log(`Sunset time is ${time}. Sunrise time is ${time}`)
};
// Convert UTC to user's time zone?
// Example: https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400



submitBtn.addEventListener('click', createUser(userName, password));
