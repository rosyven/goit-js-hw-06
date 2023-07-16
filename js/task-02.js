const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const ingrList = ingredients.map(el => {
  const liEl = document.createElement("li");
  liEl.textContent = el;
  liEl.classList.add("item");
  return liEl;
});
list.append(...ingrList);