"use strict";

const loginBtn = document.getElementById("login");
const createAccountBtn = document.getElementById("createAccount");
const registerBtn = document.getElementById("register");
const userNameInput = document.querySelector("#InputUser1");
const emailInput = document.querySelector("#InputEmail1");
let passwordInput = document.querySelector("#InputPassword1");
let termsInput = document.querySelector("#flexCheckDefault");

registerBtn.disabled = true;

// Registration form validation

userNameInput.addEventListener("input", validateUserName);
passwordInput.addEventListener("input", validatePassword);
emailInput.addEventListener("input", validateEmail);

function validateUserName() {
  let username = userNameInput.value;
  let message = document.getElementById("UserHelp");
  message.innerHTML = "";
  if (username.length < 3) {
    message.innerHTML = "Username must be at least 3 characters long";
    document.querySelector("#InputUser1").classList.remove("is-valid");
    document.querySelector("#InputUser1").classList.add("is-invalid");
    message.classList.remove("text-muted");
    message.classList.add("text-danger");
  } else {
    message.innerHTML = "";
    document.querySelector("#InputUser1").classList.remove("is-invalid");
    document.querySelector("#InputUser1").classList.add("is-valid");
  }
}
function validateEmail() {
  let email = emailInput.value;
  let message = document.getElementById("emailHelp");
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  message.innerHTML = "";

  if (!emailRegex.test(email)) {
    message.innerHTML = "Email is not valid";
    document.querySelector("#InputEmail1").classList.remove("is-valid");
    document.querySelector("#InputEmail1").classList.add("is-invalid");
    message.classList.remove("text-muted");
    message.classList.add("text-danger");
  } else {
    message.innerHTML = "";
    document.querySelector("#InputEmail1").classList.remove("is-invalid");
    document.querySelector("#InputEmail1").classList.add("is-valid");
  }
}
function validatePassword() {
  let password = passwordInput.value;
  let message = document.getElementById("passwordHelp");
  let passwordRegex = /^(?=.*[a-z,A-Z,1-9])(?=.*[#$^+=!*()@%&]).{6,}$/g;
  message.innerHTML = "";
  if (!passwordRegex.test(password)) {
    message.innerHTML = "Password must be at least 6 characters long and contain at least one special character";
    document.querySelector("#InputPassword1").classList.remove("is-valid");
    document.querySelector("#InputPassword1").classList.add("is-invalid");
    message.classList.remove("text-muted");
    message.classList.add("text-danger");
  } else {
    message.innerHTML = "";
    document.querySelector("#InputPassword1").classList.remove("is-invalid");
    document.querySelector("#InputPassword1").classList.add("is-valid");
  }
}

function enableRegisterBtn() {
  let userNameValid = document.getElementById("UserHelp").innerHTML === "";
  let emailValid = document.getElementById("emailHelp").innerHTML === "";
  let passwordValid = document.getElementById("passwordHelp").innerHTML === "";
  let termsValid = termsInput.checked;

  if (userNameValid && emailValid && passwordValid && termsValid) {
    registerBtn.disabled = false;
  } else {
    registerBtn.disabled = true;
  }
}

userNameInput.addEventListener("input", validateUserName);
passwordInput.addEventListener("input", validatePassword);
emailInput.addEventListener("input", validateEmail);

userNameInput.addEventListener("input", enableRegisterBtn);
passwordInput.addEventListener("input", enableRegisterBtn);
emailInput.addEventListener("input", enableRegisterBtn);
termsInput.addEventListener("input", enableRegisterBtn);
