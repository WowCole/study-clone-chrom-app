const searchSubmit = document.querySelector(".top-screen__search-input");
const searchSelect = document.querySelector(".top-screen__search-input select");
const searchInput = document.querySelector(".top-screen__search-input input");

const searchEngine = {
  google: "https://www.google.com/search?q=",
  naver:
    "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=",
};

function onSearch(event) {
  event.preventDefault();
  console.log(searchSelect.value);
  console.log(searchEngine[searchSelect.value]);
  location.href = searchEngine[searchSelect.value] + searchInput.value;
}

searchSubmit.addEventListener("submit", onSearch);
