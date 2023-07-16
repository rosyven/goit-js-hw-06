const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const length = input.dataset.length;
  if (input.value.trim().length === Number(length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
