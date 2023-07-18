const refs = {
  input: document.getElementById("font-size-control"),
  span: document.getElementById("text"),
};

const fontSizeChange = () => {
  const fontSize = refs.input.value + "px";
  refs.span.style.fontSize = fontSize;
};
refs.input.addEventListener("input", fontSizeChange);

fontSizeChange();
