"use strict";

//Конктинація скаладання рідків

const massege = "Mango " + "is " + "happy ";
console.log(massege);

let result;
result = 5 / "2";

console.log(result);
console.log(typeof result);

const exaple = `Example: $(message)`;
console.log(exaple);

let str = "Успіх - це не випадковість, а резултат позиційного старання";
console.log(str.startsWith("Усп"));
console.log(str.endsWith("ння"));

const TITEL = "Welcome";
/* console.log(TITEL.trim()); */
console.log(TITEL.padEnd(10, "!"));
console.log(TITEL.padStart(17, "!"));

//*Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.

const name = "Sasha";
console.log(name.charAt(0));

//! Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .indexOf(), знайти і вивести в консоль позицію, на якій знаходиться пробіл між ім'ям та прізвищем

const secondname = "sasha khmaruck";
console.log(secondname.indexOf(" "));

//Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.

const fullname = "Sasha";
console.log(fullname.replace("S", "@"));

//Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".

let subtitle = "JavaScript";
console.log(subtitle.substring(0, 4));

//Напиши скрипт який виведе рядок в форматі: “Гість x y поселяється в n номер g”, підставивши замість x, y, n, g значення змінних.

/* let guest = prompt('Anatoliy');
let surname = prompt("Shatzkiy");

let room = 211;
let lethotel = 'hotel';
let prompt = (Гість $(Anatoliy) $(Shatzkiy) поселяється в, $(211) номер $(hotel));

console.log(prompt); */

let balans = " Ваш баланс поповнено на 1";

console.log(balans.padEnd(30, "0"));

///Написати скрипт пошуку в рядку. Дано
const blacklistedWord1 = "спам";

const blacklistedWord2 = "розпродаж";

const blacklistedWord3 = "Привіт";

const string1 = "Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!";
const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
const string3 = "Рекламна кампанія #jsIsAwesome";

console.log(string1.includes(blacklistedWord1));

console.log(string2.includes(blacklistedWord2));
console.log(string2.toLowerCase().includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord3));

//Створити разом з учнями скрипт, який буде отримувати від користувача число (кількість хвилин) і буде виводити рядок в форматі часу як результат. Наприклад 80 виведе 01:20 450 - 07:30. Можете використати наступні формули

const totalMinutes = prompt("Введіть кількість хвилин", "");
const numberHours = totalMinutes / 60;

const days = Math.floor(numberHours / 24);

const hours = Math.floor(numberHours % 24);

const minutes = totalMinutes % 60;

const modMinutes = String(minutes).padStart(2, "0");
const modHours = String(hours).padStart(2, "0");
alert(`${days} днів ${modHours}: ${modMinutes}`);
console.log(`${days} днів ${modHours}: ${modMinutes}`);
