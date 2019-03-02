import getNum from '../helpfull';
import { makePair, generator } from '../index';

const isEven = number => (number % 2 === 0);
const rule = '"yes" if number even otherwise answer "no".';

const makeData = () => {
  const randNum = getNum(1, 1000);
  const question = `Question ${randNum}`;
  const answer = isEven(randNum) ? 'yes' : 'no';
  return makePair(question, answer);
};

export default () => generator(rule, makeData);
