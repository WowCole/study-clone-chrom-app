const links = document.querySelector(".top-screen__search-links");
const linkPopUp = document.querySelector(".linkPopUp");
const body = document.querySelector("body");
function popUpLinks() {
  linkPopUp.classList.toggle("hidden");
}
function hidePopUpLinks() {
  linkPopUp.classList.remove("hidden");
}

links.addEventListener("click", popUpLinks);
