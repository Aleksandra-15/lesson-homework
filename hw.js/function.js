"use strict";
//1.Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента]. Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const logItems = function (array) {
  for (let j = 0; j < array.length; j++) {
    console.log(`array: ${j + 1} - ${array[j]}`);
  }
};
logItems(["Mango", "Poly", "Ajax"]);

//2.Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
  if (message) {
    console.log("Золота підвіска");
    return;
  }
  const pricePerWord = "Ціна";
  for (let h = 0; h < message.length; h++) {
    pricePerWord * message;
  }
};
console.log(calculateEngravingPrice);
calculateEngravingPrice(0, 2000);
calculateEngravingPrice(2000, 5000);
calculateEngravingPrice(3900, 5000);

//3.Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
  for (let o = 0; o < findLongestWord.length; o++) {
    console.log("Привіт, я Олександра наваюсь в школі");
  }
};
console.log(findLongestWord);

//4. Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

const formatString = function (string) {
  for (let h = 0; h >= formatString.length; h++) {
    if ((string = 40)) {
      console.log(
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi saepe quia quaerat maiores, minus officia magnam obcaecati non cupiditate quisquam optio aspernatur tempora delectus ea recusandae vitae odit ab, at a voluptates debitis corporis fugiat similique reprehenderit. Nemo, nam ipsum! Отакі діла малята"
      );
      return;
    }
    if ((string = 40)) {
      console.log("Все добре!");
      return;
    }
  }
  console.log(formatString);
};

//5.Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function(message){
  
} 