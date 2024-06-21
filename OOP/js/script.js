const car = {
  wheels: 4,
  speed: 200,
  color: "black",
  drive() {
    console.log("go");
  },
};
const ford = {
  health: 100,
  //застарілий код
  __proto__: car,
};
console.log(ford.wheels);
ford.drive();

const audi = Object.create(car);
audi.name = "audi";
audi.color = "red";

console.log(audi.color);
console.log(audi.wheels);
console.log(audi.name);

audi.drive();

console.log(audi.hasOwnProperty("name"));
console.log(audi.hasOwnProperty("whales"));
console.log(audi.hasOwnProperty("color"));

console.log(audi);

//!isPrototypeOf Перевіряє чи є об'єкт car  прототипом для audi  і повертає true and false

console.log(car.isPrototypeOf(audi));

const animal = { eats: true };

const dog = Object.create(animal);
dog.barks = true;

for (let key in dog) {
  console.log(key);
  if (!dog.hasOwnProperty(key)) continue;

  {
    console.log(key);
  }
}
const dogKeys = Object.keys(dog);

console.log(dogKeys); //[ 'barks' ]

//?Класи

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    return (this.email = newEmail);
  }
}
const timur = new User({ name: "Timur", email: "timur@gmail.com" });
console.log(timur);

const polina = new User({ name: "Polina", email: "polina@gmail.com" });
console.log(polina); //User { name: { name: 'Polina', email: 'polina@gmail.com' },  email: undefined }

console.log(timur.getEmail());
console.log(timur.changeEmail("tim@gmail.com"));

class MenuCard {
  constructor(src, alt, title, desc, price) {
    (this.src = src),
      (this.alt = alt),
      (this.title = title),
      (this.price = price),
      (this.description = desc),
      (this.transport = 27);
  }
  changeUAN() {
    this.price = this.price * 27;
  }
  render() {
    const element = document.createElement("div");
    element.innerHTML = `
<div class="menu__item">
<img src=${this.src} alt=${this.alt}>
<h3 class="menu__item-subtitle">${this.title}</h3>
<div class="menu__item-descr">${this.descr}</div>
<div class="menu__item-divider"></div>
<div class="menu__item-price">
<div class="menu__item-cost">Цена:</div>
<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
</div>
</div>
`;
    this.parent.append(element);
  }
}
new MenuCard(
  "./img/pictere.png",
  "very",
  "меню",
  "опис цього меню",
  10
).render();

//? ПРиватні властивості

class UserMain {
  #email;
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    return this.#email;
  }
  changeEmail(newEmail) {
    return (this.#email = newEmail);
  }
}
const sasha = new UserMain({ name: "sasha", email: "sasha02247@gmail.com" });

console.log(sasha.name);
console.log(sasha.getEmail);
sasha.changeEmail("sasha02247@gmail.com");
console.log(sasha.getEmail);
console.log(sasha.#email);

//! гетери і сетери

class UserMain {
  #email;
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
  //гетер email
  get email() {
    return this.#email;
  }
  //серер email
  set email(newEmail) {
    return (this.#email = newEmail);
  }
}
const sasha1 = new UserMain({ name: "sasha", email: "sasha02247@gmail.com" });

console.log(sasha1.email);
sasha1.email = "saha02247@gmail.com";
console.log(sasha1.email);

//!Статичні email
class UserMain {
  static takenEmails = [];
  static isEmilTaken(email) {
    return UserMain.takenEmails.includes(email);
  }
  #email;
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
    UserMain.takenEmails.push(email);
  }
}
const orest = new UserMain({ email: "orest02247@gmail.com" });
console.log(UserMain.isEmilTaken("orest02247@gmail.com"));
console.log(UserMain.isEmilTaken("sasha02247@gmail.com"));

class UserMain {
  #email;

  constructor(email) {
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    if (newEmail === "") {
      console.log("Mistake");
      return;
    }
    return (this.#email = newEmail);
  }
}
class ContentEditir extends UserMain {
  constructor({ email, posts }) {
    super(email);

    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditir({ email: "mango@gmil.com", posts: [] });
console.log(editor);
console.log(editor.email)

editor.addPost('post-1')
console.log(editor.posts);