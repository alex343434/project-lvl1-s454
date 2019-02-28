import readlineSync from 'readline-sync';
import getNum from '../helpfull';

const getCorrectAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default (userName) => {
  const iter = (counter) => {
    if (counter > 0) {
      const question = getNum(1, 1000);
      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');
      const correctAnswer = getCorrectAnswer(question);
      if (correctAnswer === answer) {
        console.log('Correct!\n');
        return iter(counter - 1);
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer`);
      return console.log(`was '${correctAnswer}'.Let's try again, ${userName}!`);
    }
    return console.log(`Congratulations, ${userName}!`);
  };
  iter(3, userName);//  number of asking questions
};
