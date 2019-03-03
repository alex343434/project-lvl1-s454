import getNum from '../helpfull';
import { makePair, generate } from '../generate';

const rule = 'What number is missing in the progression?';

const makeQuestionAnswer = () => {
  const begin = getNum(1, 20);
  const step = getNum(1, 20);
  const unknownMember = getNum(0, 9);
  let progression = '';
  const maxMembers = 10;
  for (let member = 0; member < maxMembers; member += 1) {
    if (member === unknownMember) {
      progression += '.. ';
      member += 1;
    }
    progression += `${begin + step * member} `;
  }
  const question = progression.trim();
  const answer = (begin + step * unknownMember).toString();
  return makePair(question, answer);
};

export default () => generate(rule, makeQuestionAnswer);
