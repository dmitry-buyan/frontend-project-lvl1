import {
  getUserReply,
  getRandomInteger,
  start,
} from '../index.js';

const intro = 'Find the greatest common divisor of given numbers.';

const getAllDevisors = (num) => {
  const devisors = [];

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      devisors.push(i);
    }
  }

  return devisors;
};

const getGcdGameData = () => {
  const numCount = 2;
  const integers = Array.from({ length: numCount }, () => getRandomInteger() * numCount);
  const userReply = Number(getUserReply(integers.join(' ')));
  const [num1, num2] = integers;
  const firstDevisors = getAllDevisors(num1);
  const secondDevisors = getAllDevisors(num2);
  const commonDevisors = firstDevisors.filter((item) => secondDevisors.includes(item));
  const correctReply = Math.max(...commonDevisors);

  return { userReply, correctReply };
};

const runGcdGame = () => start(intro, getGcdGameData);

export default runGcdGame;
