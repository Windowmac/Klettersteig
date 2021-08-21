// fetch should include a JSON object that you will define as your body (req.body) (see apiFavoriteHikesRoutes)
// req.body.user_id, req.body.hike_id

// on page load query our db for the favoriteHikes rows, probably only need the name of the hike to be displayed
// you will likely use a join to get this information
// user_id will define what hikes they have favorited, hike_id will define the details of that hike (foreign Keys)
// this should populate in a map() or filter() in your favorites page {{favorites}} in handlebars  
// look at sequelize for how to implement like button functionality on each hike
// look into FavoriteHikes.findAll(){where:} and sequelize.findOne({where:})
// You will add definitions like so ({where: {user_id=1 (get this from session token)}})
// Hikes.findOne({where: {id: = hike_Id}})
// Can use dummy tokens/accounts to test with before implementing session tokens

// Databases are more useful for storing data than local storage
// Local storage can be wiped out more easily and doesn't work between devices

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         // iterate over users
//         data.map((user) => {
//             // create the elements
//             let li = createNode('li'),
//                 img = createNode('img'),
//                 span = createNode('span');
//             img.src = user.avatar_url;
//             span.innerText = user.login;
//             // append all elements
//             appendNode(li, img);
//             appendNode(li, span);
//             appendNode(ul, li);
//         });
//     }).catch(err => {
//         console.error('Error: ', err);
//     });

const addToFavs = () => {
    fetch("http://localhost:3030/api/favorite-hikes", {
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify({
            user
            // title: "Hike",
            // body: "Test",
            // user_id: 1
            // hike_id: 1
        }),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }}
    )
    // Converting to JSON
    .then(response => response.json())
    // Displaying results to console
    .then(json => console.log(json))
    .then(data => {
        data.map((user) => {
            console.log(`Data is ${data}`);
        }
    )
    .catch(err => {
    console.log('Error: ', error);
    }
);
addToFavs();

// hike_id
// hikes name
Post.findAll({
    where: {
      user_id: 1
    }
  });
console.log("Your favorite hikes: ")

// ----------------------------------------------------------------

// Adapting code from https://github.com/taniarascia/sandbox/tree/master/tab
// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const testFav = document.getElementById('testFav');
// const favButton = document.getElementById("favButton");
// const favHikesList = document.querySelector("#favedHikes")
// // let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
// let favArr = localStorage.getItem('eachFav') ? JSON.parse(localStorage.getItem('eachFav')) : [];

// localStorage.setItem('eachFav', JSON.stringify(favArr));
// const favorites = JSON.parse(localStorage.getItem('eachFav'));

// const favListCreator = (text) => {
//   const li = document.createElement("li");
//   li.textContent = text;
//   ul.appendChild(li);
// };

// favorites.forEach(testFav => {
//   favListCreator(testFav);
// });

// form.addEventListener('submit', () => {
//   favArr.push(favButton.value);
//   // favArr.push(input.value);
//   localStorage.setItem('eachFav', JSON.stringify(favArr));
//   liMaker(favButton.value);
//   favButton.value = "";
//   console.log(`Favorite hiked added: ${favButton.value}`);
// });

// const testFavHike = document.querySelector("#TestFav");
// // const testFavHike = document.querySelector("#TestFav").innerHTML;
// // console.log(`Test hike is ${testFavHike.innerHTML}!`);

// const favArr = [];

// const addToFavs = () => {
//   fetch(api/url)
//   testFavHike.classList.toggle("fa-thumbs-down");
//   favArr.push(testFavHike);
//   console.log(`${testFavHike} has been added to favorites!`);
//   localStorage.setItem(favArr, testFavHike.innerHTML);
//   // localStorage.setItem(testFavHike, favArr.innerHTML);
//   console.log(`Favorite array is: ${favArr}`);
//   console.log(`There are ${favArr.length} favorite hikes in the array!`);
//   console.log(`There are ${localStorage.length} favorite hikes in local storage!`);
//   // localStorage.setItem(testFavHike, JSON.stringify(favArr));
// };

// {{!-- add to favorites function --}}
// {{!-- <button id="favButton">
//   Add this hike to favorites
// </button> --}}
// <div id="TestFav">PCT Hike</div>
// <i onclick="addToFavs()" class="fa fa-thumbs-up"></i>