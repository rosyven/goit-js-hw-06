const refs = {
  input: document.getElementById("font-size-control"),
  span: document.getElementById("text"),
};

refs.input.addEventListener("input", () => {
  const fontSize = refs.input.value + "px";
  refs.span.style.fontSize = fontSize;
});
