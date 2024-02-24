import runLogic from '../index.js';
import { getRandomInt, isPrime } from '../tools.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const logicGames = () => {
  const randomInt = getRandomInt(2, 29);
  const corAnswer = isPrime(randomInt) === true ? 'yes' : 'no';
  return [randomInt, corAnswer];
};

const brainPrimeGame = () => runLogic(description, logicGames);
export default brainPrimeGame;
