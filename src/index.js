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

export const generator = (rule, makeData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  console.log();
  const userName = getName();
  console.log();
  for (let i = 0; i < 3; i += 1) {
    const data = makeData();
    const question = getQuestion(data);
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = getAnswer(data);
    if (userAnswer !== answer) {
      return failBye(userName, userAnswer, data);
    }
    console.log('Correct!\n');
  }
  successBye(userName);
};
