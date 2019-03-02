import getNum from '../helpfull';
import { makePair, generator } from '../index';

const isEven = number => (number % 2 === 0);

export default () => {
  const rule = '"yes" if number even otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const randNum = getNum(1, 1000);
    const question = `Question ${randNum}`;
    const answer = isEven(randNum) ? 'yes' : 'no';
    rounds[i] = makePair(question, answer);
  }
  generator(rule, rounds);
};
