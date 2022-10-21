import {
  getUserReply,
  getRandomInteger,
  start,
} from '../index.js';

const MIN_LENGTH = 5;
const MAX_LENGTH = 10;

const intro = 'What number is missing in the progression?';

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

const getProgressionGameData = () => {
  const replacer = '..';

  const progression = renderProgression();
  const progressionRandomIndex = getRandomArrayIndex(progression);
  const index = progression.findIndex((item) => item === progression[progressionRandomIndex]);

  const newArray = progression.slice();
  newArray[index] = replacer;

  const correctReply = progression[index];
  const userReply = Number(getUserReply(newArray.join(' ')));

  return { userReply, correctReply };
};

const runProgressionGame = () => start(intro, getProgressionGameData);

export default runProgressionGame;
