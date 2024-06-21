"use strict";
/* while (умова) {
  //код
  //тіло циклу
} */

/* let i = 3;
while (i) {
  console.log(i);
  i--; //або додавання числ
} */

let age = 0;
while (age <= 18) {
  console.log(age);
  age += 1; //або парні числа типу зб на 2
}

let counter = 0;
while (counter < 10) {
  console.log(`counter: ${counter} `);
  counter++;
}

let clientCounter = 18;
const maxClients = 26;
while (clientCounter <= maxClients) {
  console.log(clientCounter);
  clientCounter++;
}
do {
  console.log(clientCounter);
  clientCounter++;
} while (clientCounter <= maxClients);
/* // do...while
do {
  //Тіло циклу
} while (умова);
 */
let x = 0;
do {
  console.log(x);
  x++;
} while (false);

//Цю форму синтаксису слід використовувати лише тоді, коли ви хочете, щоб тіло циклу виконалось хоча б один раз, незалежно від умови. Зазвичай, інша форма є більш бажаною while(…) {…}
/* let password = "";
do {
  password = prompt("Веддіть пароль довше 4-х символів");
} while (password.length < 5);
console.log("Ввели пароль:", password);
 */
/* //for
for (leti; умова; i++) {
  //тіло циклу
  console.log(i);
} */

let k = 0;
for (k; k < 5; k++) {
  console.log(k);
} //Працює

let t = 0;
for (t; t < 5; t++) {
  console.log(t);
}
console.log(t); //НЕ працює

let y = 0;
for (; y < 3; y++) {
  console.log(y);
}
for (; y < 3; ) {
  console.log(y++);
}

const max = 1;
for (let i = 0; y < max; i++) {
  console.log(i);
}

//Порахуємо суму чисел до певного значення

const target = 12;
let sum = 0;
for (let i = 0; i < target; i += 2) {
  sum++;
  /*   console.log(sum); */
  console.log(i);
}
console.log(sum);

const maxNumber = 10;
for (let i = 0; i < 10; i++) {
  console.log(`${maxNumber} %  ${i} =`, maxNumber % i);
}

//!break

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(i);
    break;
  }
}

let xum = 0;
while (true) {
  let value = +prompt("Ведіть чисо", "");
  if (!value) {
    break;
  }
  xum += value;
}
alert("Сума:", xum);
/* console.log(Number("jrnjrg")); */

//!continue
const number3 = 10;
for (let i = 0; i < number3; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log("Не прані числа:", i);
}

//?Вивести на екран таблицю множення числа 7 за допомогою циклу for.

const num = 7;
for (let i = 1; i < 10; i++) {
  let result = i * num;
  console.log(result);
}
//*Іноді можна зустріти просто нереальні речі, побудовані тільки за допомогою коду. Але ми з вами займемося базовою фігурою. Зараз вам необхідно написати код, який за допомогою зірочок (*) у консолі намалює ось таку фігуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Підказка: наприкінці фігури є перенесення рядка \n, яке теж враховується в тестах.

// НАПРИКІНЦІ КОЖНОГО РЯДКА НЕМАЄ ПРОБІЛІВ, ТІЛЬКИ ПЕРЕНЕСЕННЯ)
const lines = 6;
let result2 = "";
for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result2 += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result2 += "*";
  }
  result2 += "\n";
}
console.log(result2);

//1) Автоматизувати запитання користувачеві про фільми за допомогою циклу

//2) Зробити так, щоб користувач не міг залишити відповідь у вигляді порожнього рядка,
/* скасувати відповідь або ввести назву фільму довшу, ніж 50 символів. Якщо це відбувається -
повертаємо користувача до питань знову. (До будь-якого рядка можна звернутися як
str.length - і отримати його довжину). */

//3) За допомогою умов перевірити personalMovieDB.count, і якщо він менше 10 - вивести повідомлення
/* "Переглянуто досить мало фільмів", якщо від 10 до 30 - "Ви класичний глядач", а якщо більше - "Ви кіноман".
"Ви кіноман". А якщо не підійшло до жодного варіанту - "Сталася помилка" */

/* const numberFilems = +prompt("скільки фільмів ви подивились?", ""); */
const moviesDB = {
 /*  count: numberFilems, */
  movies: {},
};
for (let i = 0; i <= 2; i++) {
  const nameFilm = prompt("Один з переглянуих фільмів?", "");
  const movieEvaluetion = +prompt("На скільки оціните його?", "");
  if (
    nameFilm.length < 50 &&
    nameFilm != "" &&
    movieEvaluetion != "" &&
    a != null &&
    b != null
  ) {
    moviesDB.movies[nameFilm] = movieEvaluetion;
  } else {
    alert("Введіть назви фільмів та їх оцінку!");
    i--;
  }
}
