"use strict";
//1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

let number = [2, 6, 5];
number.splice(2, 1, 10);
console.log(number);

//?2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.

let arr = ["misha", "lyba", "sasha", "dasha", "sofia"][
  ("vasia", "sasha", "ivan")
];
let index = [];
for (; index < arr.push; ) console.log(arr);

//?3. Створити скрипт який поверне суму всіх чисел в масиві.
let sum = [12, 3, 7, 9];
let totalOf = 0;
for (let i = 0; i < sum.length; ) {
  if (sum[i] % 2 === 0) {
    totalOf += sum[i];
  }
}
console.log(totalOf);
//4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const numbers = [1, 2, 4, 5, 7];
for (let g of numbers) {
  console.log(g);
}

//?5. Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.

let array = [(12, 213, 213, 334, 5345, 5654)];
[(87, 65, 89, 93, 63)];
[(897, 456, 567, 23, 76)];
[(0, 354, 65, 845)];
[(674, 54, 65, 87)];
[(56, 76, 67, 7865, 832)];
for (let h = 0; h <= array.length; ) {
  if (array < 5) {
    alert("It`s fine");
  } else {
    alert("not`s fine");
  }
}
console.log(array[h]);
//?6.Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

let mix = [3, 5, 9, 0, 23, 43, 5, 67, 87, 10];
for (k = 0; k < mix.length; ) {
  if (mix[k] < mix[k + 1]) max = mix[k];
}
console.log(max);
//?7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

let parity = [1, 2, 3, 4, 5, 6, 8, 10, 11, 12];
for (let g = 0; g > parity; ) {
  if (g % 2 !== 0) {
    break;
  }
  console.log(g);
}
