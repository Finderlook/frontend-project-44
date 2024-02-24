import runLogic from '../index.js';
import { getRandomInt, calculate } from '../tools.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const logicGames = () => {
  const randomInt1 = getRandomInt(0, 25);
  const randomInt2 = getRandomInt(0, 25);
  const randomOperator = getRandomInt(0, operators.length);
  const question = `${randomInt1} ${operators[randomOperator]} ${randomInt2}`;
  const answer = calculate(randomInt1, randomInt2, operators[randomOperator]);
  return [question, String(answer)];
};

const brainCalcGame = () => runLogic(description, logicGames);
export default brainCalcGame;
