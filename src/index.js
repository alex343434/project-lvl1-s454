import welcome from './welcome';
import getUserName from './getUserName';
import rulesOfgame from './rulesOfgame';
import brainEven from './games';

export const braingames = () => {
  welcome();
  console.log();
  const userName = getUserName();
  console.log(`Hello, ${userName}`);
};

export const braineven = () => {
  welcome();
  rulesOfgame('brain-even');
  console.log();
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log();
  brainEven(userName);
};

// я сразу извиняюсь за говнокод... Что должно лежать в index.js?
