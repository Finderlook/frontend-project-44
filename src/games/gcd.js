import { getRandomInt, runLogic } from '../game-engine.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
};

const logicGames = () => {
  const randomInt1 = getRandomInt(0, 10);
  const randomInt2 = getRandomInt(0, 10);
  const question = `${randomInt1} ${randomInt2}`;
  const answer = gcd(randomInt1, randomInt2);
  return [question, String(answer)];
};

const brainGcdGame = () => runLogic(description, logicGames);
export default brainGcdGame;
