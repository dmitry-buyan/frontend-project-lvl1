import {
  welcomeUser,
  getUserReply,
  showUserReply,
  getRandomInteger,
  getRandomArrayItem,
  finishOnSuccess,
  showSuccessMessage,
  showErrorMessage,
  repeatTask,
} from '../index.js';

const getRandomMathExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = getRandomArrayItem(operators);

  const value1 = Number(getRandomInteger());
  const value2 = Number(getRandomInteger());

  return `${value1} ${operator} ${value2}`;
};

const calculateExpression = (string) => {
  const separator = ' ';
  const values = string.split(separator);
  const [value1, operator, value2] = values;

  switch (operator) {
    case '+':
      return Number(value1) + Number(value2);
    case '-':
      return Number(value1) - Number(value2);
    case '*':
      return Number(value1) * Number(value2);
    default:
      return NaN;
  }
};

const intro = 'What is the result of the expression?';
const userName = welcomeUser(intro);

const runCalcGame = () => {
  const checkUserReply = () => {
    let isReplyCorrect = true;
    const expression = getRandomMathExpression();
    const userReply = Number(getUserReply(expression));
    showUserReply(userReply);

    const correctReply = calculateExpression(expression);

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

export default runCalcGame;
