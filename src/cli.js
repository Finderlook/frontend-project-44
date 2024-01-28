import readlineSync from 'readline-sync';


const getNameGreet = () => {
    const name = readlineSync.question('May I have your name? ');
    return `Hello, ${name}!`;
};

export default getNameGreet;
