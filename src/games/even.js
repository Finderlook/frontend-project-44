import readlineSync from 'readline-sync';

const stages = 3;
const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
};

const runBrainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let stage = 0;
  while (stage < stages) {
    const randomInt = getRandomInt(0, 100);
    const corAnswer = (randomInt % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${randomInt}`);
    const answerUser = readlineSync.question('Your answer: ').toLowerCase();
    if (corAnswer !== answerUser) {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${corAnswer}'.\nLet's try again, ${userName}`);
    }
    console.log('Correct!');
    stage += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runBrainEven;
