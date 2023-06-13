"use strict";

import { randomIntFromInterval } from "./random-int-from-interval.js";

//Variables for Buttons
const pickNumberButton = document.querySelector("#pick-number-btn");
const resetButton = document.querySelector("#reset-btn");

//Variable for numbersContainer
const numbersContainer = document.querySelector(".numbers");

//Variable for Lottery Numbers Array
const lotteryNumbers = [];

//Event Listener for pickNumberButton
pickNumberButton.addEventListener("click", function () {
  let randomNumber = pickUniqueNumber();

  if (lotteryNumbers.length < 6) {
    lotteryNumbers.push(randomNumber);
  }

  renderLottoNumbers();
});

//Function to render Lottery Numbers
function renderLottoNumbers() {
  numbersContainer.innerHTML = "";

  for (let number of lotteryNumbers) {
    const numberSpan = document.createElement("span");
    numberSpan.innerText = number;
    numberSpan.classList.add("number");

    numbersContainer.appendChild(numberSpan);
  }
}

//Function to generate a unique number
function pickUniqueNumber() {
  let number = randomIntFromInterval(1, 49);

  while (lotteryNumbers.includes(number) === true) {
    number = randomIntFromInterval(1, 49);
  }

  return number;
}

/*
//Function to generate a random Number between 1 and 49
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
*/
//Event Listener for Reset Button
resetButton.addEventListener("click", function () {
  if (lotteryNumbers.length === 6) {
    lotteryNumbers.length = 0;
    renderLottoNumbers();
  }
});
