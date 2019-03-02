import getNum from '../helpfull';
import { makePair, generator } from '../index';

const massivToStr = (massivTen) => {
  let str = '';
  for (let i = 0; i < 10; i += 1) {
    str += `${massivTen[i]}  `;
  }
  return str;
};

const rule = 'What number is missing in the progression?';

const makeData = () => {
  const beginNum = getNum(1, 20);
  const stepProgr = getNum(1, 30);
  const unknownPosition = getNum(0, 9);
  const arifmeticProgr = [beginNum];
  for (let i = 1; i < 10; i += 1) {
    arifmeticProgr[i] = arifmeticProgr[i - 1] + stepProgr;
  }
  arifmeticProgr[unknownPosition] = '..';
  const question = `Question: ${massivToStr(arifmeticProgr)}`;
  const answer = `${arifmeticProgr[unknownPosition - 1] + stepProgr}`;
  return makePair(question, answer);
};

export default () => generator(rule, makeData);
