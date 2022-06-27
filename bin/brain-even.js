#!/usr/bin/env node
import { greetUser, userName } from '../src/cli.js';
import isAnswerCorrect from '../src/checknum.js';
import { getRandomInteger } from '../src/utils.js';

greetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswers = 0;
const maxCorrectAnswers = 3;

while (correctAnswers < maxCorrectAnswers) {
  if (isAnswerCorrect(getRandomInteger())) {
    correctAnswers += 1;

    if (correctAnswers === maxCorrectAnswers) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    break;
  }
}
