import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const getQuestion = pair => car(pair);
const getAnswer = pair => cdr(pair);

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
const successBye = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
const failBye = (userName, userAnswer, pair) => {
  console.log(`'${userAnswer}' is wrong answer ;(.`);
  console.log(`Correct answer was '${getAnswer(pair)}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export const makePair = (question, answer) => cons(question, answer);

export const generator = (rule, rounds) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  console.log();
  const userName = getName();
  console.log();
  for (let i = 0; i < 3; i += 1) {
    const round = rounds[i];
    const question = getQuestion(round);
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = getAnswer(round);
    if (userAnswer !== answer) {
      return failBye(userName, userAnswer, round);
    }
    console.log('Correct!\n');
  }
  return successBye(userName);
};
