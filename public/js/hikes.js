document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

const submitPic = document.getElementById('submit_pic');
const hikePic = document.getElementById('hike_pic');
const hikeId = submitPic.dataset.hike_id;
const sunriseButton = document.getElementById("sunriseBtn");
const sunriseEl = document.getElementById("sunrise");
const sunsetEl = document.getElementById("sunset");
const favButton = document.getElementById("favButton");
const ratingButton = document.getElementById("ratingButton");
const addTimeButton = document.getElementById('add-time');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// -------------------------------- Submit Pic Function --------------------------------

const addHikePic = async (pic) => {
  const body = {
    data: pic
  }
  console.log(body)
  const response = await fetch(`/api/hikes/${hikeId}/add-pic`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json());

  if(response > 0){
    console.log(`image #${response} created`);
  }
};

submitPic.addEventListener('click', () => {
  addHikePic(hikePic.value);
});

// -------------------------------- Sunrise/set API --------------------------------

// Sunrise/sunset API courtesy of https://sunrise-sunset.org/api
const sunsetAndRise = (userLat, userLong) => {
  fetch(`https://api.sunrise-sunset.org/json?lat=${userLat}lng=${userLong}`)
  .then(function (response) {
    if (response.status === 404) {
      console.log("Something went wrong. Please try again.")
    } else {
      data = response.json();
      return data;
  }})
  .then(function (data) {
    const lat = data.results.sunrise;
    const long = data.results.sunset;
    // console.log(`Sunrise for this location is at: \n${lat}`);
    // console.log(`Sunset for this location is at: \n${long}`);
    sunriseEl.innerText = lat;
    sunsetEl.innerText = long;
  });
};

sunriseButton.addEventListener("click", function() {
  sunsetAndRise(sunriseButton.dataset.lat, sunriseButton.dataset.lon);
});

// -------------------------------- Add to Favorites Function --------------------------------

const addFavorite = async (userId, hikeId, hikeName) => {
  const body = {
    user_id: userId,
    hike_id: hikeId,
    hike_name: hikeName
  }
  const response = await fetch('/api/favorite-hikes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  
  if(response.id) {
    alert(`favorite hike added!`);
    window.location.reload();
  }
  else{ alert('Trouble adding favorite hike.');
  }
};

favButton.addEventListener('click', () => {
  addFavorite(favButton.dataset.user_id, favButton.dataset.hike_id, favButton.dataset.hike_name);
});

// -------------------------------- Add Time Function --------------------------------

const addTime = async (userId, hikeId, hours, minutes, seconds) => {
  const body = {
    user_id: userId,
    hike_id: hikeId,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
  const response = await fetch(`/api/hikes/${hikeId}/times`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  
  if(response.id) {
    alert(`time added!`);
    window.location.reload();
  }
  else{ alert('trouble adding favorite');
  }
};

addTimeButton.addEventListener('click', () => {
  addTime(addTimeButton.dataset.user_id, addTimeButton.dataset.hike_id, hoursEl.value, minutesEl.value, secondsEl.value);
});

// -------------------------------- User Rating Function --------------------------------

// Courtesy of https://codeburst.io/a-simple-star-rating-system-using-vanilla-js-css-and-html-caf1b3e4d9f1
const ratingFunction = (data) => {
  let el = document.getElementById(data.target.id);
  let ratingID = parseInt(el.id);
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
    whiteColor.style.color = "white";
    i++;
  };
  this.averageRating();
};

const userRating = async (user) => {
  // const rating = await user.getRating
};

addTimeButton.addEventListener('click', () => {
  userRating;
});

// -------------------------------- Average User Rating Function --------------------------------

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

const overallRating = async (user) => {
  const overallRatingEl = 0;
};
