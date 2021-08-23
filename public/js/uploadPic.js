
const app = firebase.initializeApp({
    apiKey: "AIzaSyCA8oDm2UjB_mjXzFAqD5_TrfcTa608h0w",
    authDomain: "kletterstieg.firebaseapp.com",
    projectId: "kletterstieg",
    storageBucket: "kletterstieg.appspot.com",
    messagingSenderId: "616139153956",
    appId: "1:616139153956:web:61bacc3fdf104ccb7e2eb1",
    measurementId: "G-7T5KXQ1WE6"
  });

const storage = app.storage();
const setImage = url =>
    document.getElementById("image").setAttribute("src", url);
const handleSnapshot = snapshot => snapshot.ref.getDownloadURL().then(setImage);

const uploadImage = (storage, imageAsFile) =>
    storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile)
        .then(handleSnapshot)
        .catch(err => console.log(err));

const handleImageUpload = e => uploadImage(storage, e.target.files[0]);

document
    .getElementById("hike_pic")
    .addEventListener("change", handleImageUpload);