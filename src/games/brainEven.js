import { cons } from 'hexlet-pairs';
import getNum from '../helpfull';

export default () => {
  const randNum = getNum(1, 1000);
  const question = `Question ${randNum}`;
  if (randNum % 2 === 0) {
    return cons(question, 'yes');
  }
  return cons(question, 'no');
};
