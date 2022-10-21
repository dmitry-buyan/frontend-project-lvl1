import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;
const REPLY_POSITIVE = 'yes';
const REPLY_NEGATIVE = 'no';

const getRandomInteger = () => {
  const maxNumber = 100;
  return Math.ceil(Math.random() * maxNumber);
};

const getRandomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getUserReply = (reply) => readlineSync.question(`Question: ${reply} `);
const showUserReply = (reply) => console.log(`Your answer: ${reply}`);
const showSuccessMessage = () => console.log('Correct!');
const showErrorMessage = (userReply, correctReply, userName) => console.log(`'${userReply}' is wrong answer ;(. Correct answer was '${correctReply}'.\nLet's try again, ${userName}!`);
const finishOnSuccess = (userName) => console.log(`Congratulations, ${userName}!`);

const start = (message, getReplyData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(message);

  let totalCorrectAnswers = 0;

  while (totalCorrectAnswers < MAX_ROUNDS) {
    const { userReply, correctReply } = getReplyData();
    showUserReply(userReply);
    if (userReply === correctReply) {
      showSuccessMessage();
      totalCorrectAnswers += 1;
    } else {
      showErrorMessage(userReply, correctReply, userName);
      return;
    }
  }

  if (totalCorrectAnswers === MAX_ROUNDS) {
    finishOnSuccess(userName);
  }
};

export {
  REPLY_POSITIVE,
  REPLY_NEGATIVE,
  getUserReply,
  getRandomInteger,
  getRandomArrayItem,
  finishOnSuccess,
  showSuccessMessage,
  showErrorMessage,
  start,
};
