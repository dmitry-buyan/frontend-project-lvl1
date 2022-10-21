import {
  getUserReply,
  getRandomInteger,
  getRandomArrayItem,
  start,
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

const getCalcGameData = () => {
  const expression = getRandomMathExpression();
  const correctReply = calculateExpression(expression);
  const userReply = Number(getUserReply(expression));

  return { userReply, correctReply };
};

const runCalcGame = () => start(intro, getCalcGameData);

export default runCalcGame;
