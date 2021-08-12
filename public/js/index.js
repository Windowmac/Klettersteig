// const userName = document.getElementById('user_name');
// const password = document.getElementById('password');
// const submitBtn = document.getElementById('submit_btn');

// const createUser = (userName, password) => {
//   console.log(userName);
//   if (userName.length && password.length) {
//     const body = {};
//     body.user_name = userName.value;
//     body.password = password.value;
//   } else {
//     window.alert('enter username and password');
//     return;
//   }

//   fetch('/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   }).then((res) => 
//     res.json()).then((result) => {
//       console.log(result);
//     });
//   };

const testLat = '45.52345';
const testLong = '-122.67621';
// API courtesy of https://sunrise-sunset.org/
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
// Example: https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
sunsetAndRise();

submitBtn.addEventListener('click', createUser(userName, password));
