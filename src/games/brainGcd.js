import getNum from '../helpfull';
import { makePair, generate } from '../generate';

const gcd = (num1, num2) => {
  if (num1 < num2) {
    return gcd(num2, num1);
  }
  let remainder;
  let divident = num1;
  let divider = num2;
  while (divider !== 0) {
    remainder = divident % divider;
    divident = divider;
    divider = remainder;
  }
  return divident;
};
const rule = 'Find the greatest common divisor of given numbers.';
const makeQuestionAnswer = () => {
  const num1 = getNum(1, 100);
  const num2 = getNum(1, 25);
  const question = `${num1} ${num2}`;
  const answer = `${gcd(num1, num2)}`;
  return makePair(question, answer);
};

export default () => generate(rule, makeQuestionAnswer);
