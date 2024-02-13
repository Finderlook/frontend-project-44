import { getRandomInt, runLogic } from '../game-engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const logicGames = () => {
  const randomInt = getRandomInt(0, 100);
  const question = String(randomInt);
  const answer = (randomInt % 2 === 0) ? 'yes' : 'no';
  return [question, answer];
};

const brainEvenGame = () => runLogic(description, logicGames);
export default brainEvenGame;
