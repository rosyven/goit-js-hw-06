const refs = {
  input: document.getElementById("name-input"),
  output: document.getElementById("name-output"),
};

refs.input.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  refs.output.textContent = inputValue;
  if (inputValue === "") {
    refs.output.textContent = "Anonymous";
  }
});
