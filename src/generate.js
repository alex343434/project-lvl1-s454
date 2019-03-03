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

export const generate = (rule, makeQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  console.log();
  const userName = getName();
  console.log();
  const maxRun = 3;
  for (let counter = 0; counter < maxRun; counter += 1) {
    const questionAnswer = makeQuestionAnswer();
    const question = getQuestion(questionAnswer);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = getAnswer(questionAnswer);
    if (userAnswer !== answer) {
      failBye(userName, userAnswer, questionAnswer);
      return;
    }
    console.log('Correct!\n');
  }
  successBye(userName);
};
