("use strict");

const firebaseConfig = {
  apiKey: "AIzaSyBWh2koY53pNkyAIgRgb3qcewevMH1wwDM",
  authDomain: "blogproject-78bc0.firebaseapp.com",
  databaseURL: "https://blogproject-78bc0-default-rtdb.firebaseio.com",
  projectId: "blogproject-78bc0",
  storageBucket: "blogproject-78bc0.appspot.com",
  messagingSenderId: "24720232889",
  appId: "1:24720232889:web:be4f4921e06112b2d52668",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// database reference
var database = firebase.database();
var registerForm = document.getElementById("registerForm");
var registerFormDB = firebase.database().ref("registerForm");

registerForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var userName = getElementValue("InputUser1");
  var email = getElementValue("InputEmail1");
  var password = getElementValue("InputPassword1");

  console.log(userName, email, password);

  saveFormData(userName, email, password);
}

const saveFormData = (userName, email, password) => {
  var newRegisterForm = registerFormDB.push();

  newRegisterForm.set({
    name: userName,
    email: email,
    password: password,
  });
};

const getElementValue = (id) => {
  return document.getElementById(id).value;
};
