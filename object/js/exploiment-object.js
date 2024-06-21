"use script";

//?Перебір об'єктів

//* цикл For in

const user = {
  name: "jonh",
  age: 30,
  isAdmin: true,
};

console.log(name["name"]);
for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

//? Корисні методи об'єкта

//* object.keys(obj) -Поверне масив ключів об'єкта
const hotel = {
  name: "resort Hotel",
  starts: 5,
  capacity: 100,
};
const keys = Object.keys(hotel);
console.log(keys);

for (let key of keys) {
  console.log(hotel[key]);
}

//*object.value(obj) -повертає масив значення

const values = Object.values(hotel);

console.log(values);

//*Object.values()- повертає масив масивів де кожен масив містить пару ключе - значення

const entries = Object.entries(hotel);
console.log(entries);

for (let entry of entries) {
  const key = entry[0];
  const value = entry[1];
  console.log(`${key}: ${value}`);
}

//*Припустимо перед нами стоїть завдання порахувати загальну кількість продуктів в об'єкті формату ім'я-продукту: кількість. Тоді підійде метод Object.values () для того щоб отримати масив всіх значень і потім зручно їх скласти.
const foods = {
  apples: 6,
  oranges: 9,
  cherry: 4,
  bread: 2,
};
const foodValue = Object.values(foods);
console.log(foodValue);

let count = 0;
for (let h = 0; h < foodValue.length; h++) {
  count += foodValue[h];
}
console.log(count);

//? оператор spead - дозволяє розгортати елементу властивостей масиву
// розпилення аргументів

const temperaturesCity = {
  Lviv: 14,
  kyiv: 20,
  london: 12,
  oslo: 10,
};
const valueTemperaturesCity = Object.values(temperaturesCity);
console.log(valuesTemperaturesCity);

const min = Math.min(...valueTemperaturesCity);
console.log(min);

//?РОзпилення масивів - дозволяє розгортати елементи одного асиву в інший

const houses = ["arryn", "frey", "stark"];
const copyOfHoyses = [...houses];
const copyOfHoysesSecond = houses.slice();
console.log(houses);

console.log(copyOfHoyses);
console.log(copyOfHoysesSecond);
console.log(houses === copyOfHoyses);

const completeHouses = [...houses, "tagaryen"];
console.log(completeHouses);

//cинтаксис

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c = Object.assign("{}", a, b);
console.log(c);

const d = { x: 6, ...a, ...b, z: 40 };
const o = { x: 6, ...a, ...b, z: 40 };

console.log(d);

//Створюємо химеру
const lion = { hasTail: true, legs: 4 };
const engle = { canFly: true };

const chimera = { ...lion, ...engle };

console.log(chimera);

//? присвоєння за посиланням і за значенням

let num = 5;
let numValue = num;

num = 10;

console.log(num);
console.log(numValue);

const arrayType = ["mango"];

const arrName = arrayType;

console.log(arrayType);
console.log(arrName);

arrayType.push("Orange");

console.log(arrayType);
console.log(arrName);

arrName.push['apply']

console.log(arrayType);
console.log(arrName);