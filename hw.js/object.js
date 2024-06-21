//1.Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

const button1 = document.getElementButton("account");
const button2 = document.getElementButton("account_down");
const bankAccount = {
  ownerName: Micha,
  accountNumber: 20921,
  balance: 10000,
};
const deposits = () => {
  for (let h = 0; h < bankAccount.length; h++) {
    console.log(this.bankAccount);
  }
};
const withdraw = () => {
  for (let h = 0; h < bankAccount.length; h++) {
    console.log(this.bankAccount);
  }
  if (button1 + deposits) {
    click.button1 = "поповнити рахунок";
  }
};

//2.Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки.

const input = document.querySelector("weather");

let weather = {
  temperature: "",
  humidity: "",
  windSpeed: "",
};
for (let h = 0; h < weather.length; h++) {
  if (weather !== 0) {
    click.weather;
    temperature - 0;
  } else {
    alert("температура нижче 0 градусів Цельсія");
  }
  if (weather === 0) {
    click.weather;
    temperature += 0;
  } else {
    alert("температура вище 0 градусів Цельсія");
  }
}
console.log(weather.includes);

//3.Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const nameInput = document.getElementById("name").value;
const emailInput = document.getElementById("email").value;
const passwordInput = document.getElementById("password").value;
const user = {
  name: "Sasha",
  email: "saha02247@gmail.com",
  password: 123456,
  login: function (loginEmail, loginPassword) {
    return this.reduce((email, login) => email + login, 0);
  },
};
document.getElementById("message").textContent = "user created successfully!";

const loginEmail = document.getElementById("loginEmaiil").value;
const loginPassword = document.getElementById("loginPassword").value;

//4.Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const movie = {
  title: 'Війтівський лііцей',
  director: "Джужук",
  year: "45",
  rating: "2",
};

 Boolean.prototype.toString() 
