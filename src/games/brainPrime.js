import getNum from '../helpfull';
import { makePair, generate } from '../generate';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const smallestDivisor = (number) => {
  const findDivisor = (testDivisor) => {
    if (number % testDivisor === 0) {
      return testDivisor;
    }
    return findDivisor(testDivisor + 1);
  };
  return findDivisor(2);
};
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  return number === smallestDivisor(number);
};

const makeQuestionAnswer = () => {
  const testNumber = getNum(1, 200);
  const question = testNumber.toString();
  const answer = isPrime(testNumber) ? 'yes' : 'no';
  return makePair(question, answer);
};

export default () => generate(rule, makeQuestionAnswer);
