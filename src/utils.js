const getRandomInteger = () => {
  const max = 1000;
  return Math.floor(Math.random() * max);
};

const isNumberEven = (num) => num % 2 === 0;

export {
  getRandomInteger,
  isNumberEven,
};
