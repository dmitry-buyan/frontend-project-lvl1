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

const checkUserReply = () => {
  let isReplyCorrect = true;
  const int = getRandomInteger();
  const answer = getUserReply(int);
  showUserReply(answer);

  if ((isPrime(int) && answer === REPLY_POSITIVE) || (!isPrime(int) && answer === REPLY_NEGATIVE)) {
    showSuccessMessage();
  } else {
    showErrorMessage(answer, REPLY_NEGATIVE, userName);
    isReplyCorrect = false;
  }

  return isReplyCorrect;
};

const runPrimeGame = () => repeatTask(checkUserReply, userName, finishOnSuccess);

export default runPrimeGame;
