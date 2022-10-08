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

const runEvenGame = () => {
  const checkUserReply = () => {
    let isReplyCorrect = true;
    const randomInteger = getRandomInteger();
    const userReply = getUserReply(randomInteger);
    showUserReply(userReply);

    if ((isEven(randomInteger) && userReply === REPLY_POSITIVE)) {
      showSuccessMessage();
    } else if ((!isEven(randomInteger) && userReply === REPLY_NEGATIVE)) {
      showSuccessMessage();
    } else if ((isEven(randomInteger) && userReply === REPLY_NEGATIVE)) {
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

export default runEvenGame;
