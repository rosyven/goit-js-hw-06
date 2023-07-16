const form = document.querySelector(".login-form");
const email = form.elements.email;
const password = form.elements.password;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const userLogin = {
      email: email.value,
      password: password.value,
    };
    console.log(userLogin);
    form.reset();
  }
}
