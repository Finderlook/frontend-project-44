import runLogic from '../index.js';
import { getRandomInt, getGcd } from '../tools.js';

const description = 'Find the greatest common divisor of given numbers.';

const logicGames = () => {
  const randomInt1 = getRandomInt(1, 10);
  const randomInt2 = getRandomInt(1, 10);
  const question = `${randomInt1} ${randomInt2}`;
  const answer = getGcd(randomInt1, randomInt2);
  return [question, String(answer)];
};

const brainGcdGame = () => runLogic(description, logicGames);
export default brainGcdGame;
