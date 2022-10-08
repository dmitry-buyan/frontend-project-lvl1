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

const isEven = (number) => number % 2 === 0;

const intro = `Answer "${REPLY_POSITIVE}" if the number is even, otherwise answer "${REPLY_NEGATIVE}".`;
const userName = welcomeUser(intro);

const checkParity = () => {
  let isReplyCorrect = true;

  const checkUserReply = (number) => {
    const userReply = getUserReply(number);
    showUserReply(userReply);

    if ((isEven(number) && userReply === REPLY_POSITIVE)) {
      showSuccessMessage();
    } else if ((!isEven(number) && userReply === REPLY_NEGATIVE)) {
      showSuccessMessage();
    } else if ((isEven(number) && userReply === REPLY_NEGATIVE)) {
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

export default checkParity;
