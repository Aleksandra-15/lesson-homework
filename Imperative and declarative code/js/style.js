"use strict";

//? Перебираючі методи

//forEach()

const number = [5, 6, 10, 20, 15, "true"];
number.forEach((item, index, array) => {
  console.log(`
  index: ${index},
   number:${item},
    array: ${array}`);
});
for (let i = 0; i < number.length; i++) {
  console.log(`
    index: ${i},
     number:${number[i]},
      array: ${number}`);
}

//map()- використовується зазвичай для трансформації масиву. Початковий масив  завжди мають однакову довжину

const number2 = [5, 6, 10, 20, 15, "true"];
const doubledNumbers = number2.map((num) => {
  return num * 2;
});
number2.map((num) => {
  return num * 2;
});
console.log(number2);

const user = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Scvidvard" },
];
const userName = user.map((user) => user.name);
console.log(userName.length);
console.log(userName);
console.log(user.length);

//filter() використовується для фільтрації масиву. Призначений для відбору елементів, які задовільняюьб нашу умову в колбек функції створює новий масив

const number3 = [1, 2, 3, 4, 5, 6, 7];
const eventNumber = number3.filter((num) => {
  return num % 2 === 0;
});
console.log(eventNumber);

//Фільтрація масиву об'єктів на основі значення властивості

const user2 = [
  { id: 1, name: "Alice", sallary: 400 },
  { id: 2, name: "Bob", sallary: 800 },
  { id: 3, name: "Scvidvard", sallary: 2000 },
];
const filteredUser = user2.filter((element) => {
  return element.sallary > 400;
});
console.log(filteredUser);

//* фільтрація масиву рядків на основі пошукового запиту

const fruits = ["aplle", "banana", "cherry", "kiwi"];

const seachTerm = " a";

const machingFruit = fruits.filter((fruit) => fruit.includes(seachTerm));
console.log(machingFruit);

//* Фільтрація масиву на основі декількох умов

const product = [
  {
    name: "laptop",
    price: 1000,
    category: "Electronics",
  },
  {
    name: "shirt",
    price: 500,
    category: "clothing",
  },
  {
    name: "phone",
    price: 900,
    category: "Electronics",
  },
  {
    name: "pants",
    price: 110,
    category: "clothing",
  },
  {
    name: "washinmashine",
    price: 410,
    category: "Electronic",
  },
];
const filteredProductElectronic = product.filter(
  (product) => product.category === "Electronics" && product.price > 500
);
console.log(filteredProductElectronic);

//*Видалення дублікатів елементів маисву використовуючи метод filter()
const number4 = [3, 4, 5, 6, 6, 7, 3, 5, 6];
const uniqueNumbers = number4.filter(
  (value, index, self) => self.indexOf(value) === index
);

console.log(uniqueNumbers);

//self - оригінальний масив , який фільтрується

//? find() - використовується для пошуку і повернення першого ел. який задовільняє умову

const trees = ["birch", "maple", "oak", "poplar", "maple", "birch"];
const findTree = trees.find((tree) => tree.includes("m"));

console.log(findTree);

const arrayTrees = [
  {
    name: "birch",
    count: 4,
  },
  {
    name: "maple",
    count: 5,
  },
  {
    name: "oak",
    count: 2,
  },
  {
    name: "poplar",
    count: 6,
  },
];
const findTreeData = arrayTrees.find(
  (tree) => tree.count >= 5 && tree.name === "poplar"
);
console.log(findTreeData);

//? every()- повертає true якщо всі ел. пройшли перевірку і false якщо хоча б один не пройшов(зупиняється на брехні)

const users = [
  {
    name: "alice",
    isPremium: true,
  },
  {
    name: "bob",
    isPremium: false,
  },
  {
    name: "charlie",
    isPremium: true,
  },
];
const isPremiumUser = (user) => user.isPremium;
console.log(users.every(isPremiumUser));

const formFields = ["name", "email", "password"];
const formValue = {
  name: "Joun",
  email: "test@g,mail.com",
  password: "87421784",
};
const isformFielled = (field) => field in formValue;
console.log(formFields.every(isformFielled));

//? some() - якщо хочаб одна перевірка true тоді він зупиняється та повертає значення true(зупиняється на правді )

const usersForSome = [
  { name: "alice", isPremium: true },
  { name: "bob", isPremium: false },
  { name: "charlie", isPremium: true },
];
console.log(usersForSome.some((user) => user.isPremium));
const usersFieldsForSome = ["name", "email", "password"];

const usersValueForSome = { name: " jonh", email: "text@gmail.com" };
console.log(usersFieldsForSome.some((field) => field in usersValueForSome));

//? перебираючі методи масиву
//! reduce
const numbers = [1, 2, 3, 4,  5, 2, 5];
//початкови знач акум , якщо його нема тоді прзначуєть перше в масиві
const totalNum = numbers.reduce((acc, value) => acc + value);

console.log(totalNum);

//задача

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const totalLikes = tweets.reduce((sum, tweet) => {
  return sum + tweet.likes;
}, 0);

console.log(totalLikes);

const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);
console.log(tags);

const countTags = (array) => {
  return array.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);
};
consoд.log(countTags(tweets));

const getTagStarts = (acc, tag) => {
  // /перевіряє чи має об'єкт такий true and false
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;
  return acc;
};

const countTag = (tag) => tags.reduce(getTagStarts, {});
console.log(countTag(tags));
/* 
const arrayScript = ["type", "of", "life"];

console.log(arrayScript.join(""));
 */

//! sort() - сортування елеентів масиву, змінюючи пчаткво масиву

const numbersSort = [3, 4, 0, 5, 6, 2, 8];
console.log(numbersSort.sort());

console.log(numbersSort.sort((a, b) => b - a));

console.log(numbersSort.sort((a, b) => a - b));

const clients = ["alex", "charlie", "sonya", "pasha"];
console.log(clients.sort());

const userForSort = [
  { name: "sasha", daysActive: 16 },
  { name: "misha", daysActive: 36 },
  { name: "lida", daysActive: 5 },
  { name: "kola", daysActive: 1 },
];

const sortByDysActive = (a, b) => a.daysActive - b.daysActive;
const sortByDysActiveWay = (a, b) => a.daysActive - b.daysActive;

console.log(userForSort.sort(sortByDysActive));

const sortNames = (a, b) => a.name.localeCompare(b.name);

//? localeCompare- метод який прівнює дві сторни в поточній локалі о повертає -1, 0, 1 в залежності від порядку сортування

console.log(userForSort.sort(sortNames));

//Порахувати загальну кількість годин
//Відсортувати по кількості проведенного часу в грі

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const totalHours = players.reduce((acc, player) => acc + player.timePlayed, 0);
console.log(totalHours);

const totalGameTime = (a, b) => a.timePlayed - b.timePlayed;

console.log(players.sort(totalGameTime));

//Порахувати загальну кількість товарів в кошику

const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const sumCartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

console.log(cart.sort(sumCartQuantity));

//Відсортувати масив об'єктів за алфавітом в полі name:
const arr = [
  { name: "John", age: 32 },
  { name: "Jane", age: 26 },
  { name: "Mike", age: 42 },
  { name: "Emily", age: 29 },
];

const sortName = (a, b) => a.name.localeCompare(b.name);
console.log(arr.sort(sortName));
//TODO За допомогою  localeCompare відсортовуємо імена назви по алфавіту

//Зібрати всі теги з твітів.
//Зробити статистику всіх тегів. Назву тега потрібно зробити
//ключем, значення якого буде кількістьповторень тегів в масиві.
//Якщо властивість з ключем tag є, збільшуємо його значення на 1 //якщо властивості немає с таким ключем що в tag, створити і //записати 1

const tweets2 = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const totaltags = tweets2.reduce((acc, tweet) => {
  tweet.tags.forEach((tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
  });
  return acc;
}, []);

console.log(totaltags);

//Відсортуйте масив об'єктів за спаданням значення властивості price, а при однаковому значенні price - за зростанням значення властивості quantity.
const products = [
  { name: "Product 1", price: 100, quantity: 5 },
  { name: "Product 2", price: 50, quantity: 10 },
  { name: "Product 3", price: 200, quantity: 2 },
  { name: "Product 4", price: 50, quantity: 5 },
];

const sortProducts = (a, b) => {
  if (a.price === b.price) {
    return a.quantity - b.quantity;
  } else {
    return b.price - a.price;
  }
};
console.log(products.sort(sortProducts));
