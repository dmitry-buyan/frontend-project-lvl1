import {
  welcomeUser,
  getUserReply,
  showUserReply,
  getRandomInteger,
  finishOnSuccess,
  showSuccessMessage,
  showErrorMessage,
  repeatTask,
} from '../index.js';

const intro = 'Find the greatest common divisor of given numbers.';
const userName = welcomeUser(intro);

const getAllDevisors = (num) => {
  const devisors = [];

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      devisors.push(i);
    }
  }

  return devisors;
};

const runGcdGame = () => {
  const numCount = 2;

  const checkUserReply = () => {
    let isReplyCorrect = true;
    const integers = Array.from({ length: numCount }, () => getRandomInteger() * numCount);
    const userReply = Number(getUserReply(integers.join(' ')));
    showUserReply(userReply);

    const [num1, num2] = integers;
    const firstDevisors = getAllDevisors(num1);
    const secondDevisors = getAllDevisors(num2);
    const commonDevisors = firstDevisors.filter((item) => secondDevisors.includes(item));
    const correctReply = Math.max(...commonDevisors);

    if (userReply === correctReply) {
      showSuccessMessage();
    } else {
      showErrorMessage(userReply, correctReply, userName);
      isReplyCorrect = false;
    }

    return isReplyCorrect;
  };

  repeatTask(checkUserReply, userName, finishOnSuccess);
};

export default runGcdGame;
