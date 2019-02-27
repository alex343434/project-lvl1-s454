export default (nameOfgame, number, answer) => {
  if (nameOfgame === 'brain-even') {
    if (number % 2 === 0 && answer === 'yes') {
      return 'yes';
    }
    return 'no';
  }
  return undefined;
};
