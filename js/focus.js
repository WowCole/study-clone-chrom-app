const FOCUS_KEY = "focus";
const savedFocus = localStorage.getItem(FOCUS_KEY);
const focus = document.querySelector(".focus");
const focusInput = document.querySelector(".focus-form__input");
const focusForm = document.querySelector(".focus-form");
const todayFocus = document.querySelector(".today-focus");
const deleteButton = document.querySelector(".today-focus button");
const todayFocusText = document.querySelector(".today-focus h2");
const todayFocusCheck = document.querySelector(".today-focus input");
if (savedFocus != null) {
  drawingFocus();
}

function drawingFocus() {
  todayFocusText.innerText = savedFocus;
  document.querySelector(".focus h2").classList.toggle("hidden");
  document.querySelector(".focus h4").classList.toggle("hidden");
  focusForm.classList.toggle("hidden");
  todayFocus.classList.toggle("hidden");
  if (savedFocus == null) {
    todayFocusText.innerText = "";
  } else {
    todayFocusText.innerText = savedFocus;
  }
}

function onFocusSubmit(event) {
  event.preventDefault();
  const focusToday = focusInput.value;
  localStorage.setItem(FOCUS_KEY, focusToday);
  drawingFocus();
  todayFocusText.innerText = focusToday;
}
function deleteFocus(event) {
  event.preventDefault();
  localStorage.removeItem(FOCUS_KEY);
  drawingFocus();
}
function onCheck() {
  if (todayFocusCheck.checked) {
    todayFocusText.style.textDecoration = "line-through";
    todayFocusText.style.opacity = "0.6";
  } else {
    todayFocusText.style.textDecoration = "none";
    todayFocusText.style.opacity = "1";
  }
}
deleteButton.addEventListener("click", deleteFocus);

focusForm.addEventListener("submit", onFocusSubmit);
todayFocusCheck.addEventListener("change", onCheck);
