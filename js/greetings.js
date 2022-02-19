const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const date = new Date();
  const hour = date.getHours();
  console.log(hour);
  console.log(typeof hour);
  let hi = "";
  if (hour >= 17 && hour < 24) {
    hi = "Good evening,";
  } else if (hour >= 0 && hour < 5) {
    hi = "Good night,";
  } else if (hour >= 5 && hour < 12) {
    hi = "Good morning,";
  } else if (hour >= 12 && hour < 17) {
    hi = "Good afternoon,";
  } else {
    hi = "Hello,";
  }
  greeting.innerText = `${hi} ${username}💕🐈`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
