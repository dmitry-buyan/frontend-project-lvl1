import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');

const greetUser = () => console.log(`Hello, ${userName}!`);

export {
  userName,
  greetUser,
};
