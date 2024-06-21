//? Створення та видалення елементів

//? Створення елементів

const heading = document.createElement("h1");
const text = document.createElement('p')

heading.textContent = "Створення та видалення вузлів";
text.textContent = "Ціль урок: Створити нові елементи да додати їх в розмітку"

console.log(heading);

//* element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.

// document.querySelector('.list').append(heading)

//* element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.

// document.querySelector(".hero").prepend(heading);

//* element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.

// document.querySelector(".hero").before(heading);

//* element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.

document.querySelector(".hero").after(heading);

//? appendChild
document.querySelector('.herro').appendChild(text)
//? insertBefore

const parentElement = document = document.querySelector('.parent')
const nextSibling =document.querySelector('nextSibling')
const newElem = document.createElement('div')
newElem.textContent = 'New element'

parentElement.insertBefore(newElem, nextSibling)

//видалення елем
perentElem.remove()

//? властивості innerHtml 

const title= document.querySelector('title')

console.log(title.textContent);

console.log(title.innerHTML);

//? insertAdjacentHTML()
const parentElem2 = document.querySelector('.parent-inner')
parentElem2.insertAdjacentHTML('beforeend','<div>Абзац пeред елементом</div>')
parentElem2.insertAdjacentHTML('beforebegin','<div>Абзац пeред батьківським елементом</div>')
//*"beforeend" - всередині elem, після усіх дітей
parentElem2.insertAdjacentHTML('afterbegin','<div>Абзац на початку батьківського елемента</div>')
parentElem2.insertAdjacentHTML('afterend','<div>Абзац після елемента</div>')

//? Атрибути 

//перевірка наявносі атрибута 

const btn = document.querySelector('#mySaved')

console.log(btn.hasAttribute('class')); //true
console.log(btn.hasAttribute('data-action')); //true

//Отримати значення атрибуту
console.log(btn.getAttribute);

//ДОПИСАТИ