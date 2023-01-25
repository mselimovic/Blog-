"use strict";

const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");

// Routing
loginBtn.addEventListener("click", () => {
  window.open("login.html", "_self");
});

registerBtn.addEventListener("click", () => {
  window.open("register.html", "_self");
});

// Registration form validation

document.getElementById("register").addEventListener("click", function () {
  const userName = document.querySelector("#InputUser1").value;
  const email = document.querySelector("#InputEmail1").value;
  let password = document.querySelector("#InputPassword1").value;
  let yearOfBirth = document.querySelector("#inputBirthYear1").value;
  let terms = document.querySelector("#flexCheckDefault").checked;

  let errorMessage = "";

  if (!userName) {
    errorMessage += "Username is required ";
    document.querySelector("#InputUser1").classList.add("is-invalid");
  }
  if (!email) {
    errorMessage += "Email is required ";
    document.querySelector("#InputEmail1").classList.add("is-invalid");
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMessage += "Email is not valid. ";
    document.querySelector("#InputEmail1").classList.add("is-invalid");
  }
  if (!password) {
    errorMessage += "Password is required ";
    document.querySelector("#InputPassword1").classList.add("is-invalid");
  } else if (password.length < 6) {
    errorMessage += "Password must be at least 6 characters";
    document.querySelector("#InputPassword1").classList.add("is-invalid");
  }
  if (!terms) {
    errorMessage += "Terms and conditions are not accepted ";
    document.querySelector("#flexCheckDefault").classList.add("is-invalid");
  }

  if (errorMessage) {
    alert(errorMessage);
  } else {
    alert("Form is valid, you should set up firebase");
  }
});
