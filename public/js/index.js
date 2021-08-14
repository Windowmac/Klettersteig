const userName = document.getElementById('user_name');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit_btn');
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

const testLat = '45.52345';
const testLong = '-122.67621';
// Sunrise/sunset API courtesy of https://sunrise-sunset.org/
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
// Allow user to enter their preferred day to call from? API can take another parameter
// Example: https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
sunsetAndRise();

// Latitude and longitude API courtesy of 
const latLongFinder = () => {
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
  });
};
latLongFinder();

// Map generator API courtesy of https://openlayers.org/
const mapGenerator = () => {
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
  });
};
mapGenerator();


const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
  })
});

const Handlebars = require('handlebars');

const source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
const template = Handlebars.compile(source);

const data = { "name": "Alan", "hometown": "Somewhere, TX",
    "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
const result = template(data);

const fs = require('fs');
    fs.writeFile("test.html", result, function(err) {
    if(err) {
        return console.log(err);
    }
});



// Map API courtesy of https://openlayers.org/
import 'ol/ol.css';
import Graticule from 'ol/layer/Graticule';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import Stroke from 'ol/style/Stroke';
import TileDebug from 'ol/source/TileDebug';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import proj4 from 'proj4';
import {applyTransform} from 'ol/extent';
import {get as getProjection, getTransform} from 'ol/proj';
import {register} from 'ol/proj/proj4';

const osmSource = new OSM();

const debugLayer = new TileLayer({
  source: new TileDebug({
    tileGrid: osmSource.getTileGrid(),
    projection: osmSource.getProjection(),
  }),
  visible: false,
});

const graticule = new Graticule({
  // the style to use for the lines, optional.
  strokeStyle: new Stroke({
    color: 'rgba(255,120,0,0.9)',
    width: 2,
    lineDash: [0.5, 4],
  }),
  showLabels: true,
  visible: false,
  wrapX: false,
});

const map = new Map({
  layers: [
    new TileLayer({
      source: osmSource,
    }),
    debugLayer,
    graticule,
  ],
  target: 'map',
  view: new View({
    projection: 'EPSG:3857',
    center: [0, 0],
    zoom: 1,
  }),
});

const queryInput = document.getElementById('epsg-query');
const searchButton = document.getElementById('epsg-search');
const resultSpan = document.getElementById('epsg-result');
const renderEdgesCheckbox = document.getElementById('render-edges');
const showTilesCheckbox = document.getElementById('show-tiles');
const showGraticuleCheckbox = document.getElementById('show-graticule');

function setProjection(code, name, proj4def, bbox) {
  if (code === null || name === null || proj4def === null || bbox === null) {
    resultSpan.innerHTML = 'Nothing usable found, using EPSG:3857...';
    map.setView(
      new View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 1,
      })
    );
    return;
  }

  resultSpan.innerHTML = '(' + code + ') ' + name;

  const newProjCode = 'EPSG:' + code;
  proj4.defs(newProjCode, proj4def);
  register(proj4);
  const newProj = getProjection(newProjCode);
  const fromLonLat = getTransform('EPSG:4326', newProj);

  let worldExtent = [bbox[1], bbox[2], bbox[3], bbox[0]];
  newProj.setWorldExtent(worldExtent);

  // approximate calculation of projection extent,
  // checking if the world extent crosses the dateline
  if (bbox[1] > bbox[3]) {
    worldExtent = [bbox[1], bbox[2], bbox[3] + 360, bbox[0]];
  }
  const extent = applyTransform(worldExtent, fromLonLat, undefined, 8);
  newProj.setExtent(extent);
  const newView = new View({
    projection: newProj,
  });
  map.setView(newView);
  newView.fit(extent);
}

function search(query) {
  resultSpan.innerHTML = 'Searching ...';
  fetch('https://epsg.io/?format=json&q=' + query)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const results = json['results'];
      if (results && results.length > 0) {
        for (let i = 0, ii = results.length; i < ii; i++) {
          const result = results[i];
          if (result) {
            const code = result['code'];
            const name = result['name'];
            const proj4def = result['proj4'];
            const bbox = result['bbox'];
            if (
              code &&
              code.length > 0 &&
              proj4def &&
              proj4def.length > 0 &&
              bbox &&
              bbox.length == 4
            ) {
              setProjection(code, name, proj4def, bbox);
              return;
            }
          }
        }
      }
      setProjection(null, null, null, null);
    });
}

/**
 * Handle click event.
 * @param {Event} event The event.
 */
searchButton.onclick = function (event) {
  search(queryInput.value);
  event.preventDefault();
};

/**
 * Handle checkbox change events.
 */
renderEdgesCheckbox.onchange = function () {
  osmSource.setRenderReprojectionEdges(renderEdgesCheckbox.checked);
};
showTilesCheckbox.onchange = function () {
  debugLayer.setVisible(showTilesCheckbox.checked);
};
showGraticuleCheckbox.onchange = function () {
  graticule.setVisible(showGraticuleCheckbox.checked);
};
