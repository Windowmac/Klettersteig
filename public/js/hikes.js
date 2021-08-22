document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

const submitPic = document.getElementById('submit_pic');
const hikePic = document.getElementById('hike_pic');
const hikeId = submitPic.dataset.hike_id;

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
}

submitPic.addEventListener('click', () => {
  addHikePic(hikePic.value);
});

const sunriseButton = document.getElementById("sunriseBtn");
const citySearchInput = document.getElementById("city-search");
const sunriseEl = document.getElementById("sunrise");
const sunsetEl = document.getElementById("sunset");



sunriseButton.addEventListener("click", function() {
    sunsetAndRise(sunriseButton.dataset.lat, sunriseButton.dataset.lon);
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
    console.log(`Sunrise for this location is at: \n${lat}`);
    console.log(`Sunset for this location is at: \n${long}`);

    sunriseEl.innerText = lat;
    sunsetEl.innerText = long;
  });
};
