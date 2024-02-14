import { getRandomInt, runLogic } from '../game-engine.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  return console.log('There is no such operator');
};

const logicGames = () => {
  const randomInt1 = getRandomInt(0, 25);
  const randomInt2 = getRandomInt(0, 25);
  const randomOperator = getRandomInt(0, operators.length - 1);
  const question = `${randomInt1} ${operators[randomOperator]} ${randomInt2}`;
  const answer = calculate(randomInt1, randomInt2, operators[randomOperator]);
  return [question, String(answer)];
};

const brainCalcGame = () => runLogic(description, logicGames);
export default brainCalcGame;
