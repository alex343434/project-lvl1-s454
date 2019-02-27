import readlineSync from 'readline-sync';
import brainEven from './games';

const rulesOfgame = (nameOfgame) => {
  if (nameOfgame === 'brain-even') {
    console.log('Answer "yes" if number even otherwise answer "no"');
  }
  if (nameOfgame === 'something') {
    console.log();
  }
};

export const braingames = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const braineven = () => {
  console.log('\nWelcome to the Brain Games!');
  rulesOfgame('brain-even');
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  brainEven(userName);
};
