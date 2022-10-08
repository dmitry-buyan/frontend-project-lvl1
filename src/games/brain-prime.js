import {
  MAX_ROUNDS,
  REPLY_POSITIVE,
  REPLY_NEGATIVE,
  welcomeUser,
  getUserReply,
  showUserReply,
  getRandomInteger,
  finishOnSuccess,
  showSuccessMessage,
  showErrorMessage,
} from '../index.js';

const intro = `Answer "${REPLY_POSITIVE}" if given number is prime. Otherwise answer "${REPLY_NEGATIVE}".`;
const userName = welcomeUser(intro);

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const runPrimeGame = () => {
  let isReplyCorrect = true;

  const checkUserReply = (number) => {
    const userReply = getUserReply(number);
    showUserReply(userReply);

    if (isPrime(number) && userReply === REPLY_POSITIVE) {
      showSuccessMessage();
    } else if (!isPrime(number) && userReply === REPLY_NEGATIVE) {
      showSuccessMessage();
    } else if (isPrime(number) && userReply === REPLY_NEGATIVE) {
      showErrorMessage(userReply, REPLY_POSITIVE, userName);
      isReplyCorrect = false;
    } else {
      showErrorMessage(userReply, REPLY_NEGATIVE, userName);
      isReplyCorrect = false;
    }
  };

  let totalCorrectAnswers = 0;

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const randomInteger = getRandomInteger();
    checkUserReply(randomInteger);

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

export default runPrimeGame;
