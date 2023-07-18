const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

list.forEach((el) => {
  const category = el.firstElementChild.textContent;
  const elements = el.firstElementChild.nextElementSibling.children.length;
  console.log(`Category:, ${category}`);
  console.log(`Elements:, ${elements}`);
});
