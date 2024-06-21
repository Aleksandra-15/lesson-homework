/*  //*Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
const inputText = document.querySelector("#validation-input1");
const inputTextTwo = document.querySelector("#validation-input2");
const checkBtn = document.querySelector(".check");
function checkInput() {
  if (inputText.value && inputTextTwo.value) {
    alert("Обидва поля заповнено!");
  } else {
    alert("НЕ всі поля заповнені!!!");
  }
}
checkBtn.addEventListener("click", checkInput); 

//*Зробити так щоб коли натискаєш на клавіші вгору вниз квадратик пересувався відповідно
const box = document.querySelector(".box");
 let topPosition = box.offsetTop; 
function translatePosition(event) {
  if (event.key === "ArrowBottom") {
    topPosition += 10;
    console.log("click");
    box.style.top = topPosition + "px";
  } else if (event.key === "ArrowTop") {
    topPosition -= 10;
    box.style.top = topPosition + "px";
  }
}
document.addEventListener("keydown", translatePosition);

//*Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.
const inputText = document.querySelector("#validation-input");
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
//* Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
const range = document.getElementById("font-size-control");
const text = document.getElementById("text");
range.addEventListener("input", () => {
 text.style.fontSize = `${range.value}px`
});
