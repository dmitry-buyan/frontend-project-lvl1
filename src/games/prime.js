import {
  REPLY_POSITIVE,
  REPLY_NEGATIVE,
  getUserReply,
  getRandomInteger,
  start,
} from '../index.js';

const intro = `Answer "${REPLY_POSITIVE}" if given number is prime. Otherwise answer "${REPLY_NEGATIVE}".`;

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

const getPrimeGameData = () => {
  const num = getRandomInteger();
  const userReply = getUserReply(num);
  const correctReply = isPrime(num) ? REPLY_POSITIVE : REPLY_NEGATIVE;

  return { userReply, correctReply };
};

const runPrimeGame = () => start(intro, getPrimeGameData);

export default runPrimeGame;
