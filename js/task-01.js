const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

const title = document.querySelector("h2").textContent;

list.forEach((el) => {
  const elements = el.querySelectorAll("li");
  console.log(`Category:, ${title}`);
  console.log(`Elements:, ${elements.length}`);
});
