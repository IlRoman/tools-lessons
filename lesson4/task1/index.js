import './src/polyfills/array-flat.js';
import './src/polyfills/array-flatMap.js';
import calcExpression, { sum, mult } from './src/calculator/index.js';
import fetchUser from './src/profile/getway.js';
import { printProfile } from './src/profile/index.js';

const calcResult = calcExpression('1 + 2');
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser('facebook');
printProfile({ name: 'Tom', from: 'The World' });