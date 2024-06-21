"use strict";
/* //повідомлення 
alert("Hello!");
 */

/*  const result = confirm('are you here?');
console.log( result);  */
/* 
const answer = prompt("Вам вже є 18?", "");
console.log(typeof answer);
 */

/* const answer = ["1", "2", "3"];

console.log(typeof answer); */
/* const answer = [];
const result = ["1", "2", "3", '5'];
answer[0] = prompt("як вас звати?", "");
answer[1] = prompt("яке у вас хобі?", "");
answer[2] = prompt("скільки вам років?", "");
console.table({answer});
console.table(result); */
/* 
const group = 'FE_1y_6_23 діти (2 підгрупа)';
console.log("Я навчаюся в GoITeens в групі:", group); */

/* const result = confirm('Як вас звати?');
console.log( result); */

//! Оголоси дві змінні, які зберігають назву та ціну товару: name і price. Присвойте змінним наступні характеристики товару (відразу при оголошенні) назва: MacBook Pro 13″, ціна: 100000
//!Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «MacBook Pro 13″», ціна за штуку 10000 кредитів'. Присвой товару нову ціну - 20000. Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «MacBook Pro 13″», ціна за штуку 2000 кредитів'
/* 
const name = 'MacBook Pro 13';
let price = 10000;
console.log(name, price,'кредитів');

price = 20000;
console.log(name, price,'кредитів');



 */
/* const answer = confirm('');
 if (anwer) {
    alert ('Ls. gsndthl;tyj')
 }
 else{ alert ('ls. yt gsndth;tyj')} */

//!ПОРІВНЯННЯ
const x = 5;
const y = 8;
const z = 5;
/* console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x >= y:", x >= y);
console.log("x <= y:", x <= y);
console.log("x == y:", x == y);
console.log("x === y:", x === "5");
console.log("x === z:", x !== z);
console.log('x === "5":', x != "5"); */
console.log(y % x);

let num = "524";
console.log(typeof num);

num = Number(num);
console.log(typeof num);
console.log(num);

let elementWidth = "50.548px";
elementWidth = Number.parseInt(elementWidth);
console.log(elementWidth);
console.log(typeof elementWidth);

let elementHeight = "200.238473274gfg784";
elementHeight = Number.parseFloat(elementHeight);
console.log(elementHeight);

const validNumber = Number("51");
console.log(Number.isNaN(validNumber));

const invaladString = Numder("udhfuwhf");
console.log(Number.isNaN(invaladString));

console.log((0.1 * 10 + 0.2 * 10) / 10);

// math.floor -повертає найбільше ціле число, або = вказаному
console.log(Math.flor(1.7));

// math.coil -повертає найьенше ціле число, більше або = вказаному
console.log(Math.ceil(1.2));

// !math.round(num) -повертає значення  округленого числа  до найблищого числа

console.log(Math.round(11.2));

console.log(Math.round(11.7));

//Math.max (num1, num2, ...) -повертає найбільше число з набору
console.log(Math.min(20, 50, 40, 100, 30));
//! math.pow(num, exponent) - зведення числа в ступінь
console.log(Math.pow(3, 3));

//!math.random() - повертатиме випадкове число в діапазоні від 0 до 1
console.log(Math.random());
console.log(((Math.random() * (10 - 1) + 1)).toFixed());
