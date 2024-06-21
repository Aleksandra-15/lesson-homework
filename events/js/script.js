/* "use strict";
const btnInput = document.querySelector(".btn");

btnInput.onCLick = function () {
  alert("Дякую");
};

btnInput.onCLick = function () {
  alert("Дякую");
}; // заміна попереднього

//Синтаксис
Element.addEventListener(event, handler, [optional]);

event
Назва події, наприклад "click".
handler
Посилання на функцію-обробник.
options
Додатковий об’єкт із властивостями

//для видалення оброника події
Element.removeEventListener(event, handler, [optional]);

 */
/* 
const singleBtn = document.querySelector(".single");
const mutipleBtn = document.querySelector(".multiple");
const handleClick = () => alert("Click");
singleBtn.addEventListener("click", handleClick);

const firstCallback = () => alert("First callback");
const secondCallback = () => alert("Second callback");
const thirdCallback = () => alert("third Callback");

const addBtn = document.querySelector['[data-action="add"]'];
const removeBtn = document.querySelector['[data-action="remove"]'];
const btn = document.querySelector(".btn-click");
const handleClickAlert = () => alert("click even lister alert");

addBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClickAlert);
});
removeBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClickAlert);
});
 */

//Напишіть скрипт зміни кольору кнопки при натискані на неї.
/* const button = document.querySelector('.button');
 button.addEventListener('click', () => {
    button.style.background = 'red'
})


//Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку ‘Додати стилі’.



const handleClickEvent = (event) => {
  console.log('event', event );

  console.log('event type:' , event.type);
  console.log('this:', event.this);
  console.log('target:', event.target);
}


btn.addEventListener('click', handleClickEvent)
 */

/* //!Написати програму яка буде виводити данні введені в інпут в інтерфейс сторінки.

const inputDate = input.value;
const iputElement = document.querySelector(".btn");
const btnClickBtn = document.querySelector(".btn-click");
const text = document.querySelector(".text");
btn.addEventListener("click", () => {});

ShowBtn.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(this);
});
// подія event або e не дозволяє посиланню працювати (скасуваня дії браузера за замовчуванням)
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();
});

const form = document.querySelector(".form");
const loginInput = form.querySelector('input[type="text"]');
const passInput = form.querySelector('input[type="password"]');
form.addEventListener("submit",  handleSubmit);

function handleSubmit(event) {
  e.preventDefault(); //trim - вирізає на кінці і на початку пробіл
  const login = loginInput.value.trim();
  const password = passInput.value.trim();
  if (login === "" || password === "") {
    return alert("будь ласка, введіть валідну інформацію");
  }
  
}
form.resalt();
alert(
  `дякую за реєстрацію! 
  Логін: ${login}
  Пароль: ${password}`
) */

/* const inputElement = document.querySelector(".my-input");
const focusBtn = document.querySelector(".focus-btn");
const blurBtn = document.querySelector(".blur-btn");

focusBtn.addEventListener("click", () => {
  inputElement.focus();
  console.log("Input Focus"); //встановлення фокусу
});
blurBtn.addEventListener("click", () => {
  inputElement.blur();
  console.log("Input blur"); //встаноленння фокусу
});
inputElement.addEventListener("change", () => {
  const newValue = event.target.value;
  console.log("Ivent Change", newValue);
});

inputElement.addEventListener("input", () => {
  const newValue = event.target.value;
  console.log("Ivent input", newValue);
});



 */
/* const inputText = document.querySelector("#validation-input");
const text = document.querySelector(".error");
const inputLangth = inputText.getAttribute("data-length");
inputText.addEventListener("blur", () => {
  if (inputText.value.length < inputLangth) {
    text.textContent = "Введи 6 символів";
    inputText.style.border = "1px solid red";
  } else {
    text.textContent = "";
    inputText.style.border = "1px solid green";
  }
});
 */
/* console.log("click");
const box = document.querySelector(".box");
let leftPosition = box.offsetLeft; //початкова позиція
function translatePosition(event) {
  if (event.key === "ArrowRight") {
    /*  leftPosition = leftPosition + 10; */
/*     leftPosition += 10;
    console.log("click");
    box.style.left = leftPosition + "px";
  } else if (event.key === "ArrowLeft") {
    leftPosition -= 10;
    box.style.left = leftPosition + "px";
  }
}
document.addEventListener("keydown", translatePosition);
 */ 