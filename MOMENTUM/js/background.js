const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundPosition = "top";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);