//?Події клавіатури
document.addEventListener("keydown", (e) => {
  console.log("keydown:", e);
  console.log("key:", e.key);
  console.log("code:", e.code);
});

document.addEventListener("keyup", (e) => {
  console.log("keyup:", e);
});

//клавіші модифікатори
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.code === "KeyS") {
    console.log("ctrl + s or command + s");
  }
});

//Події миші
const square = document.querySelector(".square");

// mousedown: Коли натискаєш кнопку миші на квадратику, він стає синім.
// mouseup: Коли відпускаєш кнопку миші, квадратик повертається до жовтого кольору.
square.addEventListener("mousedown", () => {
  square.style.backgroundColor = "blue";
});

square.addEventListener("mouseup", () => {
  square.style.backgroundColor = "yellow";
});

// mouseover: Коли курсор миші заходить на квадратик, він стає зеленим.
// mouseout: Коли курсор миші виходить з квадратика, він повертається до фіолетового кольору.

/*  square.addEventListener('mouseover', () =>{
  square.style.backgroundColor = 'green'
 })

 square.addEventListener('mouseout', () =>{
  square.style.backgroundColor = 'purple'
 })
 */

square.addEventListener("mousemove", () => {
  square.style.backgroundColor = "red";
});

// Коли курсор миші рухається над квадратиком, він стає червоним.

// click - спрацьовує після mousedown, а потім mouseup над тим же елементом, якщо була використана ліва кнопка миші.

square.addEventListener("click", () => {
  alert("Квадрат було клікнуто");
});

// dblclick - спрацьовує після двох кліків на одному елементі за короткий проміжок часу. На сьогоднішній день рідко використовується.

square.addEventListener("dblclick", () => {
  alert("Квадрат було клікнуто");
});

// contextmenu - спрацьовує при натисканні правої кнопки миші. Є й інші способи відкрити контекстне меню, напр. за допомогою спеціальної клавіші на клавіатурі, але це вже не зовсім подія миші.

square.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  square.style.backgroundColor = "black";
  alert("Відкрити контекст меню");
});

//? Координати: client x\y  page x/y

// Відносно Window: clientX та clientY.
// Відносно Document: pageX та pageY.

const rectangle = document.querySelector(".rectangle");

const info = document.querySelector(".info");

rectangle.addEventListener("mousemove", (e) => {
  const clientX = e.clientX;
  const clientY = e.clientY;

  const pageX = e.pageX;
  const pageY = e.pageY;

  info.textContent = `clientX: ${clientX}, clientY: ${clientY}, pageX: ${pageX}, pageY: ${pageY}`;

  rectangle.style.backgroundColor = "yellow";
});

rectangle.addEventListener("mouseout", () => {
  info.textContent = "";
  rectangle.style.backgroundColor = "lightcoral";
});

const body = document.body;

body.addEventListener("mousemove", (e) => {
  const clientX = e.clientX;
  const clientY = e.clientY;

  const pageX = e.pageX;
  const pageY = e.pageY;

  info.textContent = `clientX: ${clientX}, clientY: ${clientY}, pageX: ${pageX}, pageY: ${pageY}`;

  body.style.backgroundColor = "lightblue";
});

body.addEventListener("mouseout", () => {
  info.textContent = "";
  body.style.backgroundColor = "white";
});

//Task

//   Написати скрипт в якому користувач друкує на клавіатурі текст який відображається на сторінці. При натисканні на кнопку “Очистити” очищувати надрукований текст. Використати можна наступну розмітку

const clear = document.querySelector(".js-clear");
const output = document.querySelector(".output");

document.addEventListener("keydown", (e) => {
  console.log("keydown:", e);
  console.log("key:", e.key);
  console.log("code:", e.code);
  output.textContent += e.key;
});
clear.addEventListener("click", () => {
  output.textContent = "";
});

//Змінити текст елементу з id="message" на текст, який користувач вводить у текстове поле з id="input" під час події keypress.

const input = document.getElementById("input");
const message = document.getElementById("message");

input.addEventListener("keydown", () => {
  message.textContent = input.value;
});
