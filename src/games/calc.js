import { getRandomInt, runLogic } from '../game-engine.js';

const description = 'What is the result of the expression?';

// const logicGames = () => {
//   const randomInt = getRandomInt(0, 100);
//   const question = String(randomInt);
//   const answer = (randomInt % 2 === 0) ? 'yes' : 'no';
//   return [question, answer];
// };

const brainCalcGame = () => runLogic(description, logicGames);
export default brainCalcGame;
