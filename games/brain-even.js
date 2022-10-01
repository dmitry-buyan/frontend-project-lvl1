import {
  MAX_ROUNDS,
  welcomeUser,
  getUserReply,
  showUserReply,
  getRandomInteger,
  finishOnSuccess,
  showSuccessMessage,
} from '../src/index.js';

const isEven = (number) => number % 2 === 0;

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';
const userName = welcomeUser(intro);

const checkParity = () => {
  let isReplyCorrect = true;

  const checkUserReply = (number) => {
    const userReply = getUserReply(number);
    showUserReply(userReply);

    if ((isEven(number) && userReply === 'yes') || (!isEven(number) && userReply === 'no')) {
      showSuccessMessage();
    } else if ((isEven(number) && userReply === 'no')) {
      console.log(`'${userReply}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      isReplyCorrect = false;
    } else {
      console.log(`'${userReply}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      isReplyCorrect = false;
    }
  };

  let totalCorrectAnswers = 0;

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    checkUserReply(getRandomInteger());

    if (isReplyCorrect) {
      totalCorrectAnswers += 1;
    } else {
      break;
    }
  }

  if (totalCorrectAnswers === MAX_ROUNDS) {
    finishOnSuccess(userName);
  }
};

export default checkParity;
