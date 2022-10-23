const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimg = document.querySelector("#bgimg");

bgimg.style.backgroundImage = `url(img/${chosenImage})`;
bgimg.style.minHeight = "100%";
bgimg.style.position = "absolute";
bgimg.style.zIndex = "-1";
bgimg.style.minWidth = "100%";
bgimg.style.backgroundPosition = "center";
bgimg.style.backgroundSize = "cover";
