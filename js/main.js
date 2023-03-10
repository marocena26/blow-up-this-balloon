"use strict";

//CONSTANT
const balloon = document.querySelector(".js-balloon");
const explodeText = document.querySelector(".js-explode-text");
const instructions = document.querySelector(".js-box-text");
const btn = document.querySelector(".js-btn");

//VARIABLES
let widthBalloon = 200;
let heightBalloon = 200;
let borderBalloon = 100;

//FUNCTIONS

//function to increase the size of the balloon
const increaseBalloon = (ev) => {
  ev.preventDefault();
  widthBalloon = widthBalloon + 10;
  heightBalloon = heightBalloon + 10;
  borderBalloon = borderBalloon + 100;
  balloon.style.width = `${widthBalloon}px`;
  balloon.style.height = `${heightBalloon}px`;
  balloon.style.borderRadius = `${borderBalloon}px`;
};

//function to change the colour of the balloon
const colorBalloon = () => {
  if (balloon.classList.contains("red")) {
    balloon.classList.remove("red");
    balloon.classList.add("green");
  } else if (balloon.classList.contains("green")) {
    balloon.classList.remove("green");
    balloon.classList.add("blue");
  } else if (balloon.classList.contains("blue")) {
    balloon.classList.remove("blue");
    balloon.classList.add("red");
  }
};

//function to blow up the balloon
const explodeBalloon = () => {
  if (widthBalloon >= 420 && heightBalloon >= 420) {
    balloon.classList.add("hidden");
    instructions.classList.add("hidden");
    explodeText.classList.remove("hidden");
  }
};

//reset function
const handleReset = () => {
  balloon.classList.remove("hidden");
  instructions.classList.remove("hidden");
  explodeText.classList.add("hidden");
  widthBalloon = 200;
  heightBalloon = 200;
  borderBalloon = 100;
  balloon.style.width = `${widthBalloon}px`;
  balloon.style.height = `${heightBalloon}px`;
  balloon.style.borderRadius = `${borderBalloon}px`;
};

//event handler function
const handleBalloon = (ev) => {
  increaseBalloon(ev);
  colorBalloon();
  explodeBalloon();
};

//function to change colours and size with mouseover
const mouseOut = () => {
  if (
    widthBalloon > 200 &&
    heightBalloon > 200 &&
    balloon.classList.contains("red")
  ) {
    widthBalloon = widthBalloon - 5;
    heightBalloon = heightBalloon - 5;
    balloon.style.width = `${widthBalloon}px`;
    balloon.style.height = `${heightBalloon}px`;
    balloon.classList.contains("red");
    balloon.classList.remove("red");
    balloon.classList.add("blue");
  } else if (
    widthBalloon > 200 &&
    heightBalloon > 200 &&
    balloon.classList.contains("green")
  ) {
    widthBalloon = widthBalloon - 5;
    heightBalloon = heightBalloon - 5;
    balloon.style.width = `${widthBalloon}px`;
    balloon.style.height = `${heightBalloon}px`;
    balloon.classList.contains("green");
    balloon.classList.remove("green");
    balloon.classList.add("red");
  } else if (
    widthBalloon > 200 &&
    heightBalloon > 200 &&
    balloon.classList.contains("blue")
  ) {
    widthBalloon = widthBalloon - 5;
    heightBalloon = heightBalloon - 5;
    balloon.style.width = `${widthBalloon}px`;
    balloon.style.height = `${heightBalloon}px`;
    balloon.classList.contains("blue");
    balloon.classList.remove("blue");
    balloon.classList.add("green");
  }
};

//EVENTS
balloon.addEventListener("click", handleBalloon);
balloon.addEventListener("mouseout", mouseOut);
explodeText.addEventListener("click", handleReset);
