import subt, {square, add} from './utils.js'; // named export
//import subt from './utils.js';

//import {add} from './utils.js';
import isSeniorB, {isAdult, canDrink} from './person.js'

import validator from 'validator';

import React from 'react';
import ReactDOM from 'react-dom'

console.log('empty app.js is running !!!')

console.log(square(2));
console.log(add(3,2));
console.log(subt(3,2));

console.log(isAdult(16));
console.log(isAdult(18));

console.log(canDrink(21));
console.log(canDrink(20));

console.log('isSenior >>>', isSeniorB(50));

console.log('validator isEmail? ', validator.isEmail('foo@bar.com'));

const num = 1234123412341234;
console.log('isCreditCard(str) >>> ', validator.isCreditCard( num.toString() )); // ??
console.log('isCreditCard(str) >>> ', validator.isCreditCard( "1234-1234-1234-1234" )); // ??
console.log('isEmpty(str) >>> ', validator.isEmpty( "" ));
