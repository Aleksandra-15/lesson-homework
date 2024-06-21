/* "use strict" 
  //!Логічні операції

  // && - і (виводить всі операнти) завжди зупиняється на брехні
  // || -або;
  // !-ні;

  console.log(false && false && true);

/* const num = 20;
const result = num > 1 && num < 30;
console.log(result);
console.log("Я правдивий " && null && [" я також правдивий"]);
console.log("Я правдивий " && false && [" я також правдивий"]);
console.log("Я правдивий " && [" я також правдивий"] && ""); */

//логічне або - завжди зупиняється на правді

/* console.log(false || false || true);
console.log(false || "Я правдивий " || false); */
/* 
console.log("Спанч боб" || "Я правдивий " || "Рікі і Морті");
console.log(false || "" || undefined || null); */
/* 
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1); */
/* 
//! Оператори розгалуження
if (true) {
  console.log("Hello!");
}
let year = +prompt("В якому році була опублікована ECMAScript-2015");
if (year === 2015) {
  alert("Супер!!!");
}
 */
// if ... else
/* 
if (100 < 50) {
  console.log("Перша умова вірна");
} else {
  console.log("перша умова не вірна");
}
if (year === 2015) {
  alert("Вітаю!! Ви вгадали.");
} else {
  alert("Ну як так можна помилятись");
}

if (year < 2015) {
  alert("Зарано.");
} else if (year < 2015) {
  alert("Запізно");
} else {
  ("саме так ");
} */

/* const salary = 500;

//false             //true
if (salary >= 1000 && salary < 2000) {
  console.log("Рівень 1");
} else if (salary <= 2000 && salary < 3000) {
  console.log("Рівень 2");
} else if (salary > 3000) {
  console.log("Рівень 3");
} else {
  console.log("працюй більше");
}
 */
//!тернарний оператор
//Синтаксис

// let resalt = умова ? значеня 1 : значення 2
/* const age = +prompt("скільки вам років");
let accessAlloweb = age > 18 ? true : false;

if (age > 18) {
  accessAlloweb = true;
} else {
  accessAlloweb = false;
}

const balance = 1000;
const messege =
  balance > 1 ? "Ваш баланс позитивний " : "Ваш баланс негативний "; */

//декілька
/*
let ageUser = +prompt("вік?", "");
let answer =
  ageUser < 3
    ? "Привіт крихітко!"
    : ageUser < 18
    ? "Вітаю"
    : ageUser < 100
    ? "моє шанування "
    : "який ваш вік?";
alert(answer);
if (ageUser < 3) {
  messege = "Вітаю";
} else if (ageUser < 100) {
  messege = "мої вітання";
} else {
  messege = "якийсь незвичайний вік!";
} */
////! SWITCH
("use strict");

// Конструкція switch може замінити кілька if.

// Вона дає можливість більш наочного способу порівняння значення відразу з кількома варіантами.

// І if/else ifоператори, і switch оператор є структурами потоку керування в JavaScript, які використовуються для прийняття рішень на основі різних умов. Хоча вони служать подібним цілям, вони мають різні варіанти використання та переваги:

// Гнучкість : if/else if оператори є більш гнучкими та можуть працювати з широким діапазоном умов. Вони дозволяють перевіряти складні умови за допомогою різноманітних операторів порівняння (наприклад, ===, >, <тощо), логічних операторів ( &&, ||, !) і спеціальних функцій. Ви також можете вкладати if/else оператори, щоб створювати більш складні процеси прийняття рішень.
// Порівняння : це switch твердження в основному використовується для простих порівнянь на основі цінностей. Він обчислює вираз один раз, а потім порівнює отримане значення з кількома реченнями case. Він не підтримує складні умови чи діапазони значень у кожному випадку.
// Читабельність : switch оператор може зробити код більш читабельним і організованим під час обробки серії рівностей щодо однієї змінної. Це особливо корисно при роботі з великою кількістю справ.
// Продуктивність : у деяких випадках switch оператор може бути швидшим, ніж довгі ланцюжки if/else if операторів, коли є кілька випадків і можна знайти пряму відповідність без необхідності оцінювати кожну умову.

// Використовуйте if/else if оператори, коли вам потрібно перевірити складні умови або оцінити кілька умов у певному порядку.
// Використовуйте цей switch оператор, коли у вас є просте порівняння на основі значення з кількома випадками, і кожен випадок прямо збігається з однією змінною.

// Інструкції Switch не можуть включати порівняння. Наприклад, перевірити, чи одна змінна є істинною, а інша – хибною, чи одне число більше іншого.

// Перемикачі призначені для перевірки однієї змінної, яка може бути в одному з багатьох станів

//!синтаксис
/*   switch(x){
    case 'value ': 
       ...
      break;
    case 'value1 ': 
       ...
      break;
    case 'value 3': 
       ...
      break;
     default;
      break;
  } */
/* //!Приклад
const a = 2 + 2;
switch (a) {
  case 3:
    console.log("Не правильно");
    break;
  case 4:
    console.log("В точку");
    break;
  case 5:
    console.log("Забагато");
    break;
  default:
    console.log("я не зрозумів");
    break;
}
const b = 3;
switch (b) {
  case 4:
    console.log("В точку");
    break;
  case 3:
  case 5:
    console.log("не вірно спробуй ще ");
    break;
  default:
    console.log("результат виглядає дивно");
}

//!Тип має значення
const arg = "0";
switch (arg) {
  case "0":
  case "2":
    console.log("Один або нуль");
    break;
  case 2:
    console.log("Два");
    break;
  case 3:
    console.log("Ніколи не буде виконано");
    break;
  default:
    console.log("Наведіть значення");
}
const valueA = 8;
if (true) {
  //block scope
  const value = 5;
  console.log(value);
}
console.log(valueA);

function typeW() {
  const p = "value";
  if (true) {
    const a = 67;
    console.log(a);
    console.log(p);
    console.log(valueA);
  }
} */

/* //*Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції.
//-"Ви зможете забрати товар завтра з 12:00 в нашому офісі" -
// 'Кур"єр доставить замовлення завтра з 9:00 до 18:00' -
// "Посилка буде відправлена сьогодні" -
//"Вам передзвонит менеджер";
const option = +prompt("choose option: 1-самовивіз, 2-курєр, 3-пошта.");
let massage;
switch (option) {
  case 1:
    massage = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
    break;
  case 2:
    massage = "Кур`єр доставить замовлення завтра з 9:00 до 18:00";
    break;
  case 3:
    massage = "Посилка буде відправлена сьогодні";
    break;
  default:
    massage = "Вам передзвонит менеджер";
    break;
}
alert(massage); */

/* //* Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число,яке дорівнює сумі букв імені і прізвища. Якщо умова не виконується - вивести “УПС”. Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12. Використовувати вбудований метод length.

const name = "Олександра";
const fullname = "Хмарук";
if (name.length > 4 && fullname.length > 5) {
  const sum = name.length + fullname.length;
  console.log(sum);
} else {
  console.log("Упс");
}
 */

//*Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
// 'Токої кількості зірок немає'
 