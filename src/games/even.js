import {
  REPLY_POSITIVE,
  REPLY_NEGATIVE,
  getUserReply,
  getRandomInteger,
  start,
} from '../index.js';

const isEven = (number) => number % 2 === 0;

const intro = `Answer "${REPLY_POSITIVE}" if the number is even, otherwise answer "${REPLY_NEGATIVE}".`;

const getEvenGameData = () => {
  const num = getRandomInteger();
  const userReply = getUserReply(num);
  const correctReply = isEven(num) ? REPLY_POSITIVE : REPLY_NEGATIVE;

  return { userReply, correctReply };
};

const runEvenGame = () => start(intro, getEvenGameData);

export default runEvenGame;
