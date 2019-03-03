import getNum from '../helpfull';
import { makePair, generate } from '../generate';

const getResult = (operand1, operand2, randOperator) => {
  switch (randOperator) {
    case '*': return operand1 * operand2;
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    default: return 'unknown operator';
  }
};
const rule = 'What is the result of the expression?';
const makeQuestionAnswer = () => {
  const operators = ['+', '-', '*'];
  const randOperator = operators[getNum(0, (operators.length - 1))];
  const operand1 = getNum(1, 20);
  const operand2 = getNum(1, 15);
  const question = `${operand1} ${randOperator} ${operand2}`;
  const answer = `${getResult(operand1, operand2, randOperator)}`;
  return makePair(question, answer);
};

export default () => generate(rule, makeQuestionAnswer);
