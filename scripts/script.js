"use strict";

import { pickUniqueNumber, lotteryNumbers } from "./pick-unique-number.js";
import { resetLotteryNumbers } from "./reset-lottery-numbers.js";

//Variables for Buttons
const pickNumberButton = document.querySelector("#pick-number-btn");
const resetButton = document.querySelector("#reset-btn");

//Variable for numbersContainer
const numbersContainer = document.querySelector(".numbers");

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

//Event Listener for Reset Button
resetButton.addEventListener("click", function () {
  resetLotteryNumbers(lotteryNumbers);
  renderLottoNumbers();
});
