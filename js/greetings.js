const USERNAME_KEY = "username";
const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector(".login-form");
const savedUsername = localStorage.getItem(USERNAME_KEY);
const time = document.querySelector("#clock").innerText.substr(0, 2);
const screens = document.querySelectorAll(
  ".top-screen, .main-screen, .bottom-screen"
);
const resetbtn = document.querySelector(".settings");

function onClickResetbtn() {
  localStorage.removeItem("username");
  loginForm.classList.remove("hidden");
  screens.forEach((element) => {
    element.classList.add("hidden");
  });
  document.querySelector(".login-form input").value = "";
}
resetbtn.addEventListener("click", onClickResetbtn);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLonginSubmit);
  screens.forEach((element) => {
    element.classList.add("hidden");
  });
} else {
  getUsername(savedUsername);
}
function SayHello(username) {
  document.querySelector("#greeting").innerText = `Hello ${username}!`;
  greeting.classList.remove("hidden");
  screens.forEach((element) => {
    element.classList.remove("hidden");
  });
}
function onLonginSubmit(event) {
  event.preventDefault();
  const username = document.querySelector(".login-form input").value;
  localStorage.setItem(USERNAME_KEY, username);
  SayHello(username);
  loginForm.classList.add("hidden");
}

function getUsername(username) {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (18 <= time < 24 || 0 <= time < 6) {
    document.querySelector(
      "#greeting"
    ).innerText = `Good evening, ${savedUsername}`;
    greeting.classList.remove("hidden");
  } else if (06 <= time < 12) {
    document.querySelector(
      "#greeting"
    ).innerText = `Good morning, ${savedUsername}!`;
    greeting.classList.remove("hidden");
  } else {
    document.querySelector(
      "#greeting"
    ).innerText = `Good afternoon, ${savedUsername}!`;
    greeting.classList.remove("hidden");
  }
}
function getTime() {
  console.log(time);
}
setInterval(getUsername, 10000);
