//1.
const categories = document.getElementById("categories");
const categoryName = document.querySelectorAll(".item");

console.log(`Кількість категорій: ${categoryName.length}`);

categoryName.forEach((item) => {
  const categoryTitle = item.querySelector("h2");
  console.log(`Заголовок категорії: ${categoryTitle.innerHTML}`);

  const qantityOfCategory = item.querySelectorAll("ul li");
  console.log(`Кількість елементів: ${qantityOfCategory.length}`);
});
