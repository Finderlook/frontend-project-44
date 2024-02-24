import runLogic from '../index.js';
import { getRandomInt, isEven } from '../tools.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const logicGames = () => {
  const randomInt = getRandomInt(0, 100);
  const question = String(randomInt);
  const answer = isEven(randomInt) ? 'yes' : 'no';
  return [question, answer];
};

const brainEvenGame = () => runLogic(description, logicGames);
export default brainEvenGame;
