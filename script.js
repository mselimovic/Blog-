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
