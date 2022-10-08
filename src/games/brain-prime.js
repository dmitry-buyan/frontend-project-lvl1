import {
  REPLY_POSITIVE,
  REPLY_NEGATIVE,
  welcomeUser,
  getUserReply,
  showUserReply,
  getRandomInteger,
  finishOnSuccess,
  showSuccessMessage,
  showErrorMessage,
  repeatTask,
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
  const checkUserReply = () => {
    let isReplyCorrect = true;
    const randomInteger = getRandomInteger();
    const userReply = getUserReply(randomInteger);
    showUserReply(userReply);

    if (isPrime(randomInteger) && userReply === REPLY_POSITIVE) {
      showSuccessMessage();
    } else if (!isPrime(randomInteger) && userReply === REPLY_NEGATIVE) {
      showSuccessMessage();
    } else if (isPrime(randomInteger) && userReply === REPLY_NEGATIVE) {
      showErrorMessage(userReply, REPLY_POSITIVE, userName);
      isReplyCorrect = false;
    } else {
      showErrorMessage(userReply, REPLY_NEGATIVE, userName);
      isReplyCorrect = false;
    }

    return isReplyCorrect;
  };

  repeatTask(checkUserReply, userName, finishOnSuccess);
};

export default runPrimeGame;
