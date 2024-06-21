"use strict";
const hotel = {
  name: "resort hotel",
  stars: 5,
  capacity: 100,
  quest: ["Julia", "igor", "maria"],
};
//? Доступ до властивостей об'єкту
console.log(hotel.name);
console.log(hotel.quest[2]);
console.log(hotel["stars"]);
console.log(hotel);
hotel.name = "coast resoult";
console.log(hotel.name);
console.log(hotel);
hotel["stars"] = 5;
console.log(hotel.stars);
console.log(hotel["stars"]);
console.log(hotel);

//? Добдавання властивості об'єкта

hotel.manager = "Василь";

hotel["addres"] = "1,Bech street";
console.log(hotel);

//Видалення власт об'єкта
delete hotel.name;

console.log(hotel);

delete hotel["quest"];

console.log(hotel);

//?Відсутні властивості

console.log(hotel.pool);

//Короткий запис
let name = "resolt hotel";
let stars = 3;

//Цей ES5 стандартний застарілий

const es5Hotel = {
  name: name,
  stars: stars,
  manager: "Василь ",
};

//Цей ES5 стандартний

const es6Hotel = {
  name,
  stars,
  manager: "Василь ",
};
console.log(es6Hotel);

//? Обчислювальні властивості

const key = "person";
const getKey = function () {
  return "age";
};

const obj = {
  [key]: "Саша",
  [getKey()]: 16,
};
console.log(obj);

//!Так оголошується метод ES5

const hotel1 = {
  name: "resort hotel",
  stars: 5,
  capacity: 100,
  quest: ["Julia", "igor", "maria"],
  greethES5: function () {
    console.log("Welcome");
  },

  //!Новий стандарт ES6

  greethES6() {
    console.log("welcome");
  },
};
hotel1.greethES5();
hotel1.greethES6();

hotel1.greet = function () {
  console.log("Welcome");
  hotel1.greet();
};

//?Доступ до методу This

const hotel2 = {
  name: "resort hotel",
  stars: 5,
  capacity: 100,
  quest: ["Julia", "igor", "maria"],
  showName() {
    console.log(`Welcome to ${this.name}`);
  },
  changeCapacity(value) {
    return (this.capacity = value);
  },
  sayNameArrow: () => {
    console.log(`Welcome to ${this.name}`);
  },
};

hotel2.showName();

console.log(hotel2.capacity);

hotel2.changeCapacity(200);
console.log(hotel.sayNameArrow);

hotel2.sayNameArrow();



//?Деструктаризація масива

const rgb = [200, 255, 100];
let red1, green2, blue;
[red1, green2, blue] = rgb;
console.log(red, green, blue);
const rgb2 = [200, 255, 100, 300];
const [red, green, ...colors] = rgb2;
console.log(red, green, ...colors);

//!Елемент можна пропускати

const rgb3 = [20, 255, 100];

const [, , blues] = rgb3;
console.log(blue);
