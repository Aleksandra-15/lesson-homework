//1.Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

const btn = document.querySelector(".hello");
const first = (callback) => {
  setTimeout((btn) => {
    alert("Hello World!");
  }, 500);
};
const second = () => {
  console.log(3);
};
first(second);
second();

//2. Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.2

const inputText = document.getElementById("text ");
const text = document.querySelector("#guessResul");
const generateNumber = document.getElementById("button");
const fn = (array) => {
  for (let h = 0; h < array.length; h++) {
    click.generateNumber = inputText;
    check.inputText.Math.random(text);
    console.log(array);
  }
};

//3. Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.
/* 
const user ={
  name: sasha,
  email:emailAcc.value,
  password:'12334',
  login (){
if(this.email === )
  }
} 
 */
//4. Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.

const applyCallbackToEachElement = (arr, callback) => {
  
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = guessResul;

const result = applyCallbackToEachElement(arr, squareCallback);

console.log(result);

//5. Розрахунок дисконтної ціни. Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

const calculateDiscountedPrice = (price, discount, callback) => {};

const showDiscountedPrice = jng;

calculateDiscountedPrice(100, 10, showDiscountedPrice);
