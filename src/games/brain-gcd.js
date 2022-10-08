import {
  MAX_ROUNDS,
  welcomeUser,
  getUserReply,
  showUserReply,
  getRandomInteger,
  finishOnSuccess,
  showSuccessMessage,
  showErrorMessage,
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

const findGreatestCommonDevisor = () => {
  let isReplyCorrect = true;
  const numCount = 2;

  const checkUserReply = () => {
    const integers = Array.from({ length: numCount }, () => getRandomInteger() * numCount);
    const userReply = getUserReply(integers.join(' '));
    showUserReply(userReply);

    const [num1, num2] = integers;
    const firstDevisors = getAllDevisors(num1);
    const secondDevisors = getAllDevisors(num2);
    const commonDevisors = firstDevisors.filter((item) => secondDevisors.includes(item));
    const correctReply = Math.max(...commonDevisors);

    if (Number(userReply) === correctReply) {
      showSuccessMessage();
    } else {
      showErrorMessage(userReply, correctReply, userName);
      isReplyCorrect = false;
    }
  };

  let totalCorrectAnswers = 0;

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    checkUserReply();

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

export default findGreatestCommonDevisor;
