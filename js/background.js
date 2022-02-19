const images = [
  "cat0.jpg",
  "cat1.jpg",
  "cat2.jpg",
  "cat3.jpg",
  "cat4.jpg",
  "cat5.jpg",
  "cat6.jpg",
  "cat7.jpg",
  "cat8.jpg",
  "cat9.jpg",
  "cat10.jpg",
  "cat11.jpg",
  "cat12.jpg",
  "cat13.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.style.backgroundImage = `url(${bgImage.src})`;
