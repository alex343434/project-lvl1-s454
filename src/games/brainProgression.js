import getNum from '../helpfull';
import { makePair, generator } from '..';

const rule = 'What number is missing in the progression?';

const makeData = () => {
  const begin = getNum(1, 20);
  const step = getNum(1, 30);
  const unknownPosition = getNum(0, 9);
  let progression = '';
  for (let i = 0; i < 10; i += 1) {
    if (i === unknownPosition) {
      progression += '.. ';
      i += 1;
    }
    progression += `${begin + step * i} `;
  }
  const question = `Question: ${progression}`;
  const answer = `${begin + step * unknownPosition}`;
  return makePair(question, answer);
};

export default () => generator(rule, makeData);
