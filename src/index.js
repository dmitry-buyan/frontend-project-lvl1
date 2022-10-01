import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;

const getRandomInteger = () => {
  const maxNumber = 100;
  return Math.ceil(Math.random() * maxNumber);
};

const welcomeUser = (text) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(text);
  return userName;
};

const getUserReply = (reply) => readlineSync.question(`Question: ${reply} `);
const showUserReply = (reply) => console.log(`Your answer: ${reply}`);
const showSuccessMessage = () => console.log('Correct!');
const showErrorMessage = (userReply, correctReply, userName) => console.log(`'${userReply}' is wrong answer ;(. Correct answer was '${correctReply}'.\nLet's try again, ${userName}!`);
const finishOnSuccess = (userName) => console.log(`Congratulations, ${userName}!`);

export {
  MAX_ROUNDS,
  welcomeUser,
  getUserReply,
  showUserReply,
  getRandomInteger,
  finishOnSuccess,
  showSuccessMessage,
  showErrorMessage,
};
