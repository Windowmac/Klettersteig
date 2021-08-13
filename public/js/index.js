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

submitBtn.addEventListener('click', createUser(userName, password));

var map;

// call the outdooractive maps api initialization method with a callback function
oa.api.maps(
    function (oamaps, gm) {

	// set map center, zoom level, map types and more
	var config = {
            center : { lat: 47.54687, lng: 10.2928 },
            zoom : 10,

            mapInit : {
                basemap: "osm",
                style:   "winter",
                overlay: "slope"
            }

        };

	// instatiate a new outdooractive map
	// params: dom id of map canvas div, configuration object
	map = oamaps.map( "map_canvas", config );
});