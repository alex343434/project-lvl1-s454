import getNum from '../helpfull';
import { makePair, generator } from '../index';

const massivToStr = (massivTen) => {
  let str = '';
  for (let i = 0; i < 10; i += 1) {
    str += `${massivTen[i]}  `;
  }
  return str;
};

export default () => {
  const rule = 'What number is missing in the progression?';
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const beginNum = getNum(1, 20);
    const stepProgr = getNum(1, 30);
    const unknownPosition = getNum(0, 9);
    const arifmeticProgr = [beginNum];
    for (let j = 1; j < 10; j += 1) {
      arifmeticProgr[j] = arifmeticProgr[j - 1] + stepProgr;
    }
    arifmeticProgr[unknownPosition] = '..';
    const question = `Question: ${massivToStr(arifmeticProgr)}`;
    const answer = `${arifmeticProgr[unknownPosition - 1] + stepProgr}`;
    rounds[i] = makePair(question, answer);
  }
  generator(rule, rounds);
};
