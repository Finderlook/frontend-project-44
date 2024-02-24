import readlineSync from 'readline-sync';

const runLogic = (description, logicGames) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const stages = 3;
  let stage = 0;
  while (stage < stages) {
    const [question, answer] = logicGames(stage);
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ').toLowerCase();
    if (answer !== answerUser) {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
    stage += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runLogic;
