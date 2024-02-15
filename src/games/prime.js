import { getRandomInt, runLogic } from '../game-engine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const logicGames = () => {
  const randomInt = getRandomInt(2, 29);
  const corAnswer = isPrime(randomInt) === true ? 'yes' : 'no';
  return [randomInt, corAnswer];
};

const brainPrimeGame = () => runLogic(description, logicGames);
export default brainPrimeGame;
