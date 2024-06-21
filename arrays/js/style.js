const date = {
  about: "text",
};
console.log(date.about);

//!Масив
// Створення

//0       1   2          3
const date2 = ["text", 2, undefined, null, { name: "Jonh" }, "last element"];
// Отримання елементів з масиву
console.log(date2[0]); //text
console.log(date2[1]); //2
console.log(date2[2]); //undefined
console.log(date2[3]); //null
console.log(date2[4].name);
//Загальна клю елементів у масиві

console.log(data.langth); //4

console.log(data[data.langth - 1]);
console.log(data.at(0)); // останній елемент в масива остання версія
console.log(data.at(0));
const e = {
  regions: [
    {
      lvivRegion: {
        ceil: 20,
        text: "clouds",
      },
    },
  ],
};

//!ІТерація по масиву
const clients = ["nazar", "sasha", "sonya", "andriy", "yulia", "katya"];
for (let i = 0; i < clients.length; i++) {
  console.log("member of cliens:" + clients[i]);
}
// використати цикл заповнювати значеннями масив

const number = [];
for (let i = 1; i <= 3; i++) {
  number.push(`id-${i}`);
}
console.log(number);
console.log(number.length);

//for ... of
const item = document.querySelector(".item");
const cliens = ["nazar", "sasha", "sonya"];
for (const client of cliens) {
  console.log(client);
  item.textContent = client;
}
const stc = "javascript";
for (let letter of str) {
  console.log(letter);
}

//!Багатовимірні масиви

const matrix = [
  //0 1  2
  [1, 2, 3][(4, 5, 6)][(7, 8, 9)], // 0 //1 //2
];
console.log(matrix[0][1]); //2 ІНДЕКСАЦІЯ ЗАВЖДИ З 0
console.log(matrix[1][2]);

let total = 0;
for (let i = 0; i < matrix.length; i++) {
  console.log("Підписати матриці matrix[i]", matrix[i]);
  for (let j = 0; j < matrix[i].langth; j++) {
    console.log("Елемент підмасиву матриці matrix[i][j]", matrix[i][j]);
  }
}

const text = [
  ["title", "text", 3][("Yulia", "aboyt me", 89)][("katya", "about you", 65)],
];

//? Задачі
//Через індекс елемента додати в кінець масиву Arr1 новий елемент зі значенням: 22. Вивести значення кожного елемента масиву Arr1 в консоль.

let arr = [1, 5, "4", "hello"];
arr[4] = 22;
for (let i = 0; i < arr.length; i++) {
  console.log("Масив arr[i}", arr[i]);
}
//Вивести в консоль значення і тип кожного елементу масиву Arr2 за допомогою цикла for… of

let array = [1, 5, "4", "hello"];
for (let i of array) {
  console.log(i);
  console.log(typeof i);
}

//Написати скрипт який порахує сумму всіх парних чисел в масиві
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let totalOf = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    totalOf += numbers[i];
  }
}
console.log(totalOf);

// Напиши скрипт пошуку логіна. Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.' Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// - Спочатку через for
// - Потім через for...of
// - Логіка break
// - Метод includes() с тернарним оператором

/* 
for (let i = 0; i < logins.length; i++)
  if (logins[i] === loginToFind) {
    message = `user ${loginToFind} find.`;

    break;
  } else {
    message = `user ${loginToFind} not find.`;
  }

console.log(message);
 */

//Напиши скрипт пошуку самого маленького числа в масиві, при умові, що числа унікальні (не повторюються).

const numbers2 = [51, 18, 13, 24, 7, 85, 19];
let smallNumber = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] < smallNumber) {
    smallNumber = numbers2[i];
  }
}
console.log(smallNumber);

//! методи масиву

//? split() and join()

//* split(s) — дозволяє перетворити рядок в масив, розбивши її по розподілу s. Це не метод масиву, але розглядаємо ми його зараз так, як раніше про масиви не знали.
//* join(s) — робить в точності протилежне split. Він бере масив і склеює його в рядок, використовуючи s як роздільник.

const message = "Ласкаво просимо";
console.log(message.split(" ")); //без пробіу виводяться тільки по буквах

const fruit = ["apple", "orange", "pear", "banana "];
console.log(fruit.join(", "));

//! indexOf() and includes()

//*array.includes(x) — визначає, чи містить масив деякий елемент x, повертаючи true або false відповідно. Використовуйте includes тоді, коли необхідно перевірити, чи є елемент в масиві і не важливий його порядковий номер.

//*array.indexOf(x) — повертає перший індекс, в якому елемент x був знайдений в масиві, або число -1, якщо такого елемента немає. Використовуйте indexOf тоді, коли необхідно отримати безпосередньо індекс елемента.

const typeData = ["mango", "ajax", "poly", "kiwi"];
console.log(typeData.includes("poly"));
console.log(typeData.indexOf("poly"));

//перевірка множин умов через includes()

const fruits = "apple";
const answer = prompt("Введіть назву вашого улюбленого фрукту?");

fruits.toUpperCase();
answer.toUpperCase();
if (answer.includes(fruits) && answer !== null) {
  alert("true");
} else {
  alert("false");
}

//! Push and pop

const stack = [];
stack.push(1);
stack[1] = "apples"; // теж що push
console.log(stack);

const arrays = ["res", 3, true];
console.log(arrays.pop()); // показує значю яке ми видаляємо
console.log(arrays);

//! shift() and unshift()

// shift() — видаляє елемент з початку масиву і повертає його (елемента) значення.
// unshift() — додає елемент в початок масиву.

const user = ["andriy", "Sasha", "gosha"];
console.log(user.shift()); //Видаляє елемент
console.log(user);
console.log(user.unshift("Горіх")); // додає елемент
console.log(user);

//!Slice
//*Slice() дозволяє отримувати елементи підмножини масиву і додавати їх в новий масив. У більшості випадків використовується для створення копії частини або цілого вихідного масиву.

const team = ["john", "alice", "bob", "eva"];
console.log(team.slice(1, 3));

console.log(team.slice(-2)); // вирізається з кінця

//! Метод splice() - швейцарський ніж для роботи з масивами, в тому випадку, якщо вихідний масив необхідно змінити. Дозволяє видаляти, додавати і замінювати елементи в довільному місці масиву.

// Щоб видалити елемент з маисву
//splice( position, num)

// position - вказувати позицію (індекс) першиго елемента для видалення
// num - кількість видаляючихся елементів

const scores = [1, 2, 3, 4, 5];
const deleteScores = scores.splice(0, 3);
console.log(scores);
console.log(deleteScores);

const scores2 = [1, 2, 3, 4, 5];
const deleteScores2 = scores2.splice(1, 3);
console.log(scores2);
console.log(deleteScores2);

//додавання елементів в масив
const colors = ["red", "green", "yellow", "blue"];
console.log(colors.splice(2, 0, "purple"));
console.log(colors.splice(2, 0, 3));
console.log(colors);

//!Заміна елементів масиву

const languages = ["C#", "C++", "java", "JavaScript"];
console.log(languages.splice(1, 1, "python"));
console.log(languages);

// concat()

const oldClients = ["John", "Alice", "Bob", "Eva"];
const newClients = ["Andriy", "Sasha", "Gasha", "Katya", "Sonya", "Yulia"];

const allClients = oldClients.concat(newClients);

// const allClients = oldClients + newClients

console.log(oldClients); // [ 'John', 'Alice', 'Bob', 'Eva' ]
console.log(newClients); // [ 'Andriy', 'Sasha', 'Gasha', 'Katya', 'Sonya', 'Yulia' ]

console.log(allClients); // [
// 'John', 'Alice',
// 'Bob', 'Eva',
// 'Andriy', 'Sasha',
// 'Gasha', 'Katya',
// 'Sonya', 'Yulia'
// ]
