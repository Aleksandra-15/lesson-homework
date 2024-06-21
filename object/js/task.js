//1.Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.

const person = {
  name: "sasha",
  age: 16,
  gender: "female",
  showPerson() {
    console.log(`name:  ${this.name} age: ${this.age}, gender ${this.gender}`);
  },
};
person.showPerson();

//2.Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.

const students = [
  {
    name: "sonia",
    age: 14,
    gender: "female",
    grade: 8,
  },
  {
    name: "sasha",
    age: 16,
    gender: "female",
    grade: 12,
  },
  {
    name: "gosha",
    age: 17,
    gender: "male",
    grade: 10,
  },
];
const averageScore = (array) => {
  let sum = 0;
  for (let f = 0; f < array.length; f++) {
    sum += array[f].grade;
  }
  return Math.round(sum / array.length);
};
console.log(averageScore(students));

//3.Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.

const book = {
  title: "Name book",
  author: "Sasha",
  year: "20024",
  genre: 34,
  changeProperty: function (property, value) {
    //Метод для змін  значення властивості
    if (this.hasOwnProperty(value)) {
      return (this[value] = property);
    } else {
      console.log("Такої властивості не існує");
    }
  },
};
console.log(book.changeProperty("andrii", "author"));
console.log(book);

const cart = {
  items: [
    { name: "🍎", price: 50 },
    { name: "🍇", price: 70 },
    { name: "🍋", price: 60 },
    { name: "🍓", price: 110 },
  ],
  getItems() {
    this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    for (let j = 0; j < this.items.length; j++) {
      if (this.items[j].name === productName) {
        delete this.items[j];
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let sum = 0;
    for (let j = 0; j < this.items.length; j++) {
      sum = +this.items[j].price;
    }
    return;
  },
  increaseQuantity(productName) {
    for (let j = 0; j < this.items.length; j++) {
      if (this.items[j].name === productName) {
        this.items[j].quantity - (this.items[j].quantity || 1) - 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (let j = 0; j < this.items.length; j++) {
      if (this.items[j].name === productName) {
        this.items[j].quantity + (this.items[j].quantity || 1) + 1;
      }
    }
  },
};
console.log(cart.items);
cart.getItems();
console.log(cart.items);
cart.add({ name: "🫐", price: "150" });
console.log(cart.items);
cart.remove("🍋");
console.log(cart.items);
console.log(cart.items);
cart.increaseQuantity("🍎");
console.log(cart.items);
cart.decreaseQuantity();
console.log(cart.items);

//Дано масив об’єктів
/* 

Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти 

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

Написати функцію яка буде повертати масив всіх імен друзів
console.log(getAllNames(friends));

Написати функцію яка буде повертати масив імен друзів які онлайн
console.log(getOnlineFriends(friends));

Написати функцію яка буде повертати масив імен друзів які офлайн
console.log(getOfflineFriends(friends));

Написати функцію яка буде повертати об’єкт масивів  імен друзів які офлайн та онлайн. Створити 2 масива онлайн і офлайн,  якщо тру - в перший, якщо ні - в другий */

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

const findFriendByName = (array, name) => {
  for (let j = 0; j < array.length; j++) {
    if (array[j].name === name) {
      return `${name}`;
    }
  }
  return null;
};

console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy"));

const getAllNames = (array) => {
  const allFriends = [];
  for (let h = 0; h < array.length; h++) {
    allFriends.push(array[h].name);
  }
  return allFriends;
};
console.log(getAllNames(friends));

const getOnlineFriends = (array) => {
  let onlineFriends = [];
  for (let j = 0; j < array.length; j++) {
    if (array[j].online) {
      onlineFriends.push(array[j].name);
    }
  }
  return onlineFriends;
};
console.log(getOnlineFriends(friends));

const getOnlineFriendsTwo = (array) => {
  let onlineFriendsTwo = [];
  for (let j = 0; j < array.length; j++) {
    if (array[j].online === false) {
      onlineFriendsTwo.push(array[j].name);
    }
  }
  return onlineFriendsTwo;
};
console.log(getOnlineFriendsTwo(friends));

const getFriendsStatus = (array) => {
  const friendsByStatus = {
    online: [],
    ofline: [],
  };
  for (let j = 0; j < array.length; j++) {
    /*     if (array[j].online === false) {
      friendsByStatus.ofline.push(array[j].name);
    } else {
      friendsByStatus.online.push(array[j].name);
    }
     */
    array[j].online
      ? friendsByStatus.online.push(array[j].name)
      : friendsByStatus.ofline.push(array[j].name);
  }
  return friendsByStatus;
};
console.log(getFriendsStatus(friends));

("use strict");

//? Деструктуризація обʼєктів

const person3 = {
  name: "Jonh",
  age: 30,
  city: "New York",
};

const { name, age, city, job, isAdmin = false } = person3;

console.log(name);
console.log(age);
console.log(city);
//! Якщо змінної не знайдено
console.log(job);

console.log(isAdmin); // false

const person2 = {
  name: "Oliver",
  age: 20,
  city: "London",
};

const {
  name: personName,
  age: personAge,
  city: personCity = "New York",
} = person2;

console.log(personName);

console.log(personCity);

const hotel = {
  name: "В діда Петра",
  stars: 5,
  city: "Житомир",
};

const { name2, ...rest } = hotel;

console.log(name);

console.log(rest);

//? Глибока деструктуризація

const options = {
  size: {
    with: 100,
    height: 200,
  },
  items: ["Cake", "donut"],
  extra: true,
};

const {
  size,
  size: { width, height },
  items,
  items: [item, item2],
  extra,
  title = "Menu",
} = options;
console.log(size);
console.log(width);
console.log(height);
console.log(items);
console.log(item2);
console.log(item);
console.log(extra);
console.log(title);

//?Деструктаризація масива

//Деструктуризувати наступні об’єкти
user;
const user = {
  name0: "John",
  age0: 30,
  email: "john@example.com",
};
const { name0, age0, email } = user;
console.log(name0, age0, email);

//*car
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  features: ["power windows", "rear camera", "navigation"],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true,
  },
};

const {
  make,
  model,
  year,
  features: [item1, item5, item4],
  safety: { airbags, antilock_brakes, stability_control },
} = car;

console.log(
  make,
  model,
  year,
  item1,
  item5,
  item4,
  airbags,
  antilock_brakes,
  stability_control
);

movie;
const movie = {
  title: "The Shawshank Redemption",
  director: {
    name: "Frank Darabont",
    nationality: "American",
  },
  actors: ["Tim Robbins", "Morgan Freeman"],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90,
  },
};

const {
  title,
  director,
  director: { name, nationality },
  actor,
  actors: { actor1, actor2 },
  release_year,
  ratings,
  ratings: { imdb, rotten_tomatoes },
} = movie;

console.log(
  title,
  director,
  director,
  actor,
  actor,
  release_year,
  ratings,
  ratings
);

/* books; */
const books = {
  count: 3,
  list: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
  ],
};

const {
  count,
  list,
  list: [{ title, author, year }],
} = books;

console.log(count, list, title, author, year);

//!!!Провести глибоку деструктуризацію об’єкту

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};

const { count, artists } = musicLibrary;
const [{ name, albums }] = artists;
const [{ artists: album1, album2 }] = artists;
const [{ tracks: tracks1, tracks2 }] = albums;

const [{ name: name1, name2 }] = artists;
const [{ title, year, tracks }] = albums;
const [
  { title: title1, title2, title3, duration: duration1, duration2, duration3 },
] = tracks;

console.log(albums); 
