import getNum from '../helpfull';
import { makePair, generator } from '../index';

const getResult = (operand1, operand2, randOperator) => {
  switch (randOperator) {
    case '*': return operand1 * operand2;
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    default: return 'unknown operator';
  }
};

export default () => {
  const rule = 'What is the result of the expression?';
  const rounds = [];
  const operators = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const randOperator = operators[getNum(0, 2)];
    const operand1 = getNum(1, 15);
    const operand2 = getNum(1, 15);
    const question = `Question: ${operand1} ${randOperator} ${operand2}`;
    const answer = getResult(operand1, operand2, randOperator);
    rounds[i] = makePair(question, `${answer}`);
  }
  generator(rule, rounds);
};
