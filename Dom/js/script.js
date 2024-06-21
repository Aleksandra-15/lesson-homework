"use script";

//!навігатор -що за допомою нього можемо получити інформацію про браузер і операційну систему
/*
console.log(navigator.userAgent);


 alert(location.href);
if (confirm('перейти на сайт Wikipebia?')){
    location.href = 'https://wikipedia.arg' //переправляє на іншу адресу
};
 */

//!DOM - навігація по документу

/* const htmlElement = document.documentElement; //дістає весь контент
const headElement = document.head; //дістає тільки шапку
const bodyElement = document.body; //дістає вcе що в body
console.log(headElement);
console.log(bodyElement);
console.log(htmlElement);
 */

const item = document.querySelector(".item");
//!element.parentNode - вибирає батьківський елемент
const parentElementNode = item.parentNode;
console.log(parentElementNode);

//!elem.childNodes - псевдомасив зберігає всі дочірні елементи, включаючи текстові.
const childElementNode = item.childNodes;
console.log(childElementNode);

//!elem.children - псевдомасив зберігає тільки дочірні вузли-елементи, тобто відповідні тегам.
const childrenElem = parentElementNode.children;
console.log(childrenElem);

//!elem.firstChild - вибере перший дочірній елемент всередині elem, включаючи текстові вузли.

/* //отримання першого дочірнього елементу
const container = document.querySelector(".container");
const firstElementChild = container.firstChild;
console.log(`перший елемент: ${firstElementChild}`);

//Отримання останнього елемента включаючи текстові вузли

const lastChild = container.lastChild;
console.log(`Останній дочірній елемент: ${lastChild}`);

//отримання попередього сусіда
const lastElementChild = container.lastElementChild;

console.log(`останній дочірній елемент: ${lastElementChild}`);

// Отримання попередньго сусіда
const secondElement = firstElementChild.nextElementSibling;

console.log(`Отримання попередньго сусіда: ${lastElementChild}`);

//настного сусіда
const thirdElement = secondElement.nextElementSibling;
 */

//!кварі селектор

const firstParagraph = document.querySelector("p");

console.log(`Перший елемент <p>: ${firstParagraph}`);

const allParagraph = document.querySelector("p");

const secondParagraph = document.querySelector(".second");
console.log("Другий елемент <p> : ${secondParagraph}");
