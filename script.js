"use strict";

//Variables for Buttons
const pickNumberButton = document.querySelector("#pick-number-btn");
const resetButton = document.querySelector("#reset-btn");
const numbersContainer = document.querySelector(".numbers");

const lotteryNumbers = [];

pickNumberButton.addEventListener("click", function () {
  let randomNumber = pickUniqueNumber();

  if (lotteryNumbers.length < 6) {
    lotteryNumbers.push(randomNumber);
  }

  renderLottoNumbers();
});

function renderLottoNumbers() {
  numbersContainer.innerHTML = "";

  for (let number of lotteryNumbers) {
    const numberSpan = document.createElement("span");
    numberSpan.innerText = number + " ";

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

//Function to generate a random Number between 1 and 49
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
