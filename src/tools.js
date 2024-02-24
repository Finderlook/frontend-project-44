const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
};

const isEven = (randomInt) => randomInt % 2 === 0;

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return console.log('There is no such operator');
  }
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export {
  getRandomInt,
  isEven,
  getGcd,
  calculate,
  isPrime,
};
