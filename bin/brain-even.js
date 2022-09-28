#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;
const maxRandomInteger = 1000;
const getRandomInteger = () => Math.ceil(Math.random() * maxRandomInteger);

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let isAnswerCorrect = true;

const checkParity = (number) => {
  const userAnswer = readlineSync.question(`Question: ${number} `);
  console.log(`Your answer: ${userAnswer}`);

  if ((isEven(number) && userAnswer === 'yes') || (!isEven(number) && userAnswer === 'no')) {
    console.log('Correct!');
  } else if ((isEven(number) && userAnswer === 'no')) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${userName}!`);
    isAnswerCorrect = false;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${userName}!`);
    isAnswerCorrect = false;
  }
};

const maxAnswers = 3;
let totalCorrectAnswers = 0;

for (let i = 0; i < maxAnswers; i += 1) {
  checkParity(getRandomInteger());

  if (isAnswerCorrect) {
    totalCorrectAnswers += 1;
  } else {
    break;
  }
}

if (totalCorrectAnswers === maxAnswers) {
  console.log(`Congratulations, ${userName}!`);
}
