"use strict";

import { randomIntFromInterval } from "./random-int-from-interval.js";

//Variable for Lottery Numbers Array
export const lotteryNumbers = [];

//Function to generate a unique number
export function pickUniqueNumber() {
  let number = randomIntFromInterval(1, 49);

  while (lotteryNumbers.includes(number) === true) {
    number = randomIntFromInterval(1, 49);
  }

  return number;
}
