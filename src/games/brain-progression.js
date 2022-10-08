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

const MIN_LENGTH = 5;
const MAX_LENGTH = 10;

const intro = 'What number is missing in the progression?';
const userName = welcomeUser(intro);

const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

const renderProgression = () => {
  const progressionLength = getRandomIntInclusive(MIN_LENGTH, MAX_LENGTH);
  const progression = [getRandomInteger()];
  const progressionStep = getRandomInteger();

  for (let i = 1; i < progressionLength; i += 1) {
    const previoustItem = progression[i - 1];
    const nextItem = previoustItem + progressionStep;
    progression.push(nextItem);
  }

  return progression;
};

const getRandomArrayIndex = (arr) => Math.floor(Math.random() * arr.length);

const runProgressionGame = () => {
  const replacer = '..';
  let isReplyCorrect = true;

  const checkUserReply = () => {
    const progression = renderProgression();
    const progressionRandomIndex = getRandomArrayIndex(progression);
    const index = progression.findIndex((item) => item === progression[progressionRandomIndex]);

    const newArray = progression.slice();
    newArray[index] = replacer;

    const correctReply = progression[index];

    const userReply = getUserReply(newArray.join(' '));
    showUserReply(userReply);

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

export default runProgressionGame;
