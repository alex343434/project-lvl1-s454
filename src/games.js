import readlineSync from 'readline-sync';
import getNumber from './getNumber';
import getCorrectAnswer from './getCorrectAnswer';

export default (userName) => {
  const iter = (counter) => {
    if (counter > 0) {
      const number = getNumber();
      console.log(`Question: ${number}`);
      const answer = readlineSync.question('Your answer: ');

      const correctAnswer = getCorrectAnswer('brain-even', number, answer);
      if (correctAnswer === answer) {
        console.log('Correct!\n');
        return iter(counter - 1);
      }
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    }
    return console.log(`Congratulations, ${userName}!`);
  };
  return iter(3, userName);
};
