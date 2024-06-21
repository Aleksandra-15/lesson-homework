//*Створити масив із п'яти чисел. Використовуючи метод push(), додати до масиву ще один елемент
let number = [4, 5, 2, 6, 9];
number.push(8);
console.log(number);

//*Створити масив із трьох стрічок. Використовуючи метод pop(), видалити з масиву останній елемент.
let array = ["hello", "my", "name"];
array.pop();
console.log(array);

//*Створити масив із десяти чисел. Використовуючи метод slice(), створити новий масив, який буде містити перші п'ять елементів.
const arr = [2, 4, 6, 3, 7, 8, 9, 32, 543];

const arr2New = arr2New.slice(0, 5);

console.log(arr2New);

//*Створити масив із п'яти чисел. Використовуючи метод indexOf(), знайти індекс елемента зі значенням 3.

let arrayNumber = [4, 7, 9, 3, 5];
const index = arrayNumber.indexOf(3);
console.log(index);

//*Створити масив із п'яти стрічок. Використовуючи метод join(), створити одну стрічку, яка буде містити всі елементи масиву, розділені комою.

let stringArray = ["hello", "30", "sasha"];
console.log(stringArray.join(" ,"));

//*Робимо slug в URL з назви стратті. Заголовок статті складається тільки з букв та пропусків
//- Нормалізуємо рядок
//- Разбиваємо по словах
//- Зшиваємо в рядок з розділителями
//- Ченінг
// Повинно вийти top-10-benefits-of-react-framework
const title = "Top 10 benefits of React framework";

const resalt = title.trim().toUpperCase().split("");
console.log(resalt);
const slug = resalt.join("-");
onsole.log(resalt);

//*Напиши скрипт який рахує суму елементів двух масивів.

const num = [4, 6, 3, 6, 6, 7, 8];
const num1 = [5, 8, 1, 2, 3, 4];
const allReys = num.concat(num1);

let sum = 0;
for (let i = 0; i < allReys.length; i++) {
  sum += allReys[i];
}
console.log(sum);

//*Розбити цю строку по буквам в масив, вивести цей масив в консоль. Також вивести в консоль індекс літери l (Л англійська маленька) за допомогою вбудованого метода. Після цього елементи масива поєднати в строку і вивести строку в консоль

const message = "Welcome to Ukraine!";
let latterMessage = message.split("");
console.log(latterMessage);
let indexOfLetter = latterMessage.indexOf("l");
console.log(indexOfLetter);
const stay = latterMessage.join(",");
console.log(stay);

//*Створити масив гравців. додати до кожного гравця -N, де n - це порядковий номер.

const player = ["sonia", "sasha", "katya"];
for (let i = 0; i < player.length; i++) {
  player[i] = player[i] + "-" + (i + 1);
}
console.log(player)
