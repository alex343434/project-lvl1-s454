import { cons } from 'hexlet-pairs';
import getNum from '../helpfull';

const getResult = (operand1, operand2, randOperator) => {
  if (randOperator === '+') {
    return operand1 + operand2;
  } if (randOperator === '-') {
    return operand1 - operand2;
  } if (randOperator === '*') {
    return operand1 * operand2;
  }
  return 'unknown operator';
};

export default () => {
  const operators = ['+', '-', '*'];
  const randOperator = operators[getNum(0, 2)];
  const operand1 = getNum(1, 15);
  const operand2 = getNum(1, 15);
  const question = `Question: ${operand1} ${randOperator} ${operand2}`;
  const correctAnswer = getResult(operand1, operand2, randOperator);
  return cons(question, `${correctAnswer}`);
};
