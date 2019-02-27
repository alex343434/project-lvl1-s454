import readlineSync from 'readline-sync';

const getCorrectAnswer = (nameOfgame, ask, answer) => {
  if (nameOfgame === 'brain-even') {
    if (ask % 2 === 0 && answer === 'yes') {
      return 'yes';
    }
    return 'no';
  }
  return undefined;
};

const getNumber = () => ((min, max) => Math.round(Math.random() * (max - min) + min))(1, 1000);


export default (userName) => {
  const iter = (counter) => { // iteration fucntion
    if (counter > 0) {
      const question = getNumber();
      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');

      const correctAnswer = getCorrectAnswer('brain-even', question, answer);
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
