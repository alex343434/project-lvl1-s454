import getNum from '../helpfull';
import { makePair, generate } from '../generate';

const isEven = number => (number % 2 === 0);
const rule = '"yes" if number even otherwise answer "no".';

const makeQuestionAnswer = () => {
  const randNum = getNum(1, 1000);
  const question = (randNum).toString();
  const answer = isEven(randNum) ? 'yes' : 'no';
  return makePair(question, answer);
};

export default () => generate(rule, makeQuestionAnswer);
