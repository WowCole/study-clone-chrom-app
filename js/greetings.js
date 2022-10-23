const USERNAME_KEY = "username";
const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLonginSubmit);
} else {
  getUsername(savedUsername);
}
function getUsername(username) {
  document.querySelector("#greeting").innerText = `Hello ${username}!`;
  greeting.classList.remove("hidden");
}
function onLonginSubmit(event) {
  event.preventDefault();
  const username = document.querySelector("#login-form input").value;
  localStorage.setItem(USERNAME_KEY, username);
  getUsername(username);
  loginForm.classList.add("hidden");
}
