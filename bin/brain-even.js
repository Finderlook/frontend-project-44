#!/usr/bin/env node
import getNameGreet from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getNameGreet();

console.log(`Сохранённая переменная: ${name}`);
