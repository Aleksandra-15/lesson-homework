"use strict";
//* Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.
const variants = document.getElementById("choose");
const coffee = document.getElementById("coffee");
const tea = document.getElementById("tea");
const juice = document.getElementById("juice");
const message = document.querySelector(".message");
variants.addEventListener("input", () => {
  switch (variants.value) {
    case "coffee":
      message.textContent = "ви обрали каву";
      break;
    case "tea":
      message.textContent = "ви обрали Чай";
      break;
    case "juice":
      message.textContent = "ви обрали Сік";
      break;
    default:
      alert("Виберіть напій");
      break;
  }
});
//*  Створити розмітку  з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
const inputDay = document.querySelector(".missing");
const monday = document.getElementById("monday");
const thutdey = document.getElementById("thutdey");
const wensday = document.getElementById("wensday");
const thurthday = document.getElementById("thurthday");
const friday = document.getElementById("friday");
const sutaeday = document.getElementById("sutaeday");
const sunday = document.getElementById("sunday");
const inputBtn = document.querySelector(".check-day");
days -
  week.addEventListener("input", () => {
    switch (week) {
      case 1:
        day = "понеділок";
        break;
      case 2:
        day = "вівторок";
        break;
      case 3:
        day = "середа";
        break;
      case 4:
        day = "четвер";
        break;
      case 5:
        day = "п'ятниця";
        break;
      default:
        alert("Робочі дні");
        break;
    }
  });
