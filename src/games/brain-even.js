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

const isEven = (number) => number % 2 === 0;

const intro = `Answer "${REPLY_POSITIVE}" if the number is even, otherwise answer "${REPLY_NEGATIVE}".`;
const userName = welcomeUser(intro);

const checkReply = () => {
  let isReplyCorrect = true;
  const num = getRandomInteger();
  const reply = getUserReply(num);
  showUserReply(reply);

  if ((isEven(num) && reply === REPLY_POSITIVE) || (!isEven(num) && reply === REPLY_NEGATIVE)) {
    showSuccessMessage();
  } else {
    showErrorMessage(reply, REPLY_NEGATIVE, userName);
    isReplyCorrect = false;
  }

  return isReplyCorrect;
};

const runEvenGame = () => repeatTask(checkReply, userName, finishOnSuccess);

export default runEvenGame;
