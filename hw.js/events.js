/* const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".js-backdrop");

function toggleModal() {
  document.body.classList.toggle("show-modal");
}

openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal); */

/* openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
}); */

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
