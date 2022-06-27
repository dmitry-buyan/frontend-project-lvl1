import readlineSync from 'readline-sync';
import { userName } from './cli.js';
import { isNumberEven } from './utils.js';

const isAnswerCorrect = (num) => {
  console.log(`Question: ${num}`);
  const correctAnswer = 'Correct!';
  const wrongAnswer = `'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${userName}!`;
  const userAnswer = readlineSync.question('Your answer: ');

  if (isNumberEven(num) && userAnswer === 'yes') {
    console.log(correctAnswer);
    return true;
  } if (!isNumberEven(num) && userAnswer === 'no') {
    console.log(correctAnswer);
    return true;
  }

  console.log(wrongAnswer);
  return false;
};

export default isAnswerCorrect;
