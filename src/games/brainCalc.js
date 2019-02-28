import readlineSync from 'readline-sync';
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

export default (userName) => {
  const iter = (counter) => {
    const operators = ['+', '-', '*'];
    if (counter > 0) {
      const randOperator = operators[getNum(0, 2)];
      const operand1 = getNum(1, 15);
      const operand2 = getNum(1, 15);
      console.log(`Question: ${operand1} ${randOperator} ${operand2}`);
      const answer = readlineSync.question('Your answer: ');
      const correctAnswer = getResult(operand1, operand2, randOperator);
      if (correctAnswer === Number(answer)) {
        console.log('Correct!');
        return iter(counter - 1);
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    return console.log(`Congratulations, ${userName}!`);
  };
  iter(3, userName);
};
