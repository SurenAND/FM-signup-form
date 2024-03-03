const form = document.getElementById("form--section");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

function validateForm() {
  const firstNameError = document.querySelector(".firstname--error");
  const lastNameError = document.querySelector(".lastname--error");
  const emailError = document.querySelector(".email--error");
  const passwordError = document.querySelector(".password--error");

  firstName.addEventListener("input", (event) => {
    event.preventDefault();
    firstNameError.style.display = "none";
    firstName.classList.remove("error--icon");
  });

  lastName.addEventListener("input", (event) => {
    event.preventDefault();
    lastNameError.style.display = "none";
    lastName.classList.remove("error--icon");
  });

  email.addEventListener("input", (event) => {
    event.preventDefault();
    emailError.style.display = "none";
    email.classList.remove("error--icon");
  });

  password.addEventListener("input", (event) => {
    event.preventDefault();
    passwordError.style.display = "none";
    password.classList.remove("error--icon");
  });

  if (!firstName.value) {
    firstNameError.style.display = "block";
    firstName.classList.add("error--icon");
    firstName.setAttribute("placeholder", "");
  }

  if (!lastName.value) {
    lastNameError.style.display = "block";
    lastName.classList.add("error--icon");
    lastName.setAttribute("placeholder", "");
  }
  if (!email.value) {
    emailError.style.display = "block";
    email.classList.add("error--icon");
    email.setAttribute("placeholder", "email@example/com");
  }
  if (!password.value) {
    passwordError.style.display = "block";
    password.classList.add("error--icon");
    password.setAttribute("placeholder", "");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
