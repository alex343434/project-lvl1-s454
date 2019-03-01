import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import brainEven from './games/brainEven';
import brainCalc from './games/brainCalc';
import brainGcd from './games/brainGcd';


const rulesOfgame = (nameOfgame) => {
  if (nameOfgame === 'brain-even') {
    console.log('Answer "yes" if number even otherwise answer "no"');
  } else if (nameOfgame === 'brain-calc') {
    console.log('What is the result of the expression?');
  } else if (nameOfgame === 'brain-gcd') {
    console.log('Find the greatest common divisor of given numbers');
  }
};

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getQuestion = (game) => {
  if (game === 'brain-even') {
    return brainEven();
  }
  if (game === 'brain-calc') {
    return brainCalc();
  }
  if (game === 'brain-gcd') {
    return brainGcd();
  }
  return 'unknown';
};

const exercize = (game, times, userName) => {
  const question = getQuestion(game);
  console.log(car(question));
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = cdr(question);

  if (answer === correctAnswer) {
    if (times > 1) {
      console.log('Correct!\n');
      return exercize(game, times - 1, userName);
    }
    return console.log(`Congratulations, ${userName}!`);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return console.log(`Let's try again, ${userName}!`);
};

export default (game) => {
  console.log('Welcome to the Brain Games!');
  rulesOfgame(game);
  console.log();
  const userName = getName();
  exercize(game, 3, userName);
};
