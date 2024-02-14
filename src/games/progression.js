import { getRandomInt, runLogic } from '../game-engine.js';

const description = 'What number is missing in the progression?';

const logicGames = () => {
  const difference = getRandomInt(2, 5);
  const startProgression = getRandomInt(0, 50);
  const arr = [];
  for (let i = startProgression; arr.length < 10; i += difference) {
    arr.push(i);
  }
  const spyAnswer = getRandomInt(0, arr.length - 1);
  const corAnswer = arr[spyAnswer];
  arr[spyAnswer] = '..';
  return [arr.join(' '), String(corAnswer)];
};

const brainProgressionGame = () => runLogic(description, logicGames);
export default brainProgressionGame;
