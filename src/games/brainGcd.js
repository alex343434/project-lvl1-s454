import { cons } from 'hexlet-pairs';
import getNum from '../helpfull';

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

export default () => {
  const num1 = getNum(1, 100);
  const num2 = getNum(1, 100);
  const question = `Question: ${num1} ${num2}`;
  return cons(question, `${gcd(num1, num2)}`);
};
