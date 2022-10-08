import {
  MAX_ROUNDS,
  welcomeUser,
  getUserReply,
  showUserReply,
  getRandomInteger,
  getRandomArrayItem,
  finishOnSuccess,
  showSuccessMessage,
  showErrorMessage,
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
  let isReplyCorrect = true;

  const checkUserReply = () => {
    const expression = getRandomMathExpression();
    const userReply = getUserReply(expression);
    showUserReply(userReply);

    const correctReply = calculateExpression(expression);

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

export default runCalcGame;
