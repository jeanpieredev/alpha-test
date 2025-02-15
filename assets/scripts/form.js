import {
  validateName,
  validateNickname,
  validateEmail,
  validateSelection,
  validateTerms,
} from "./validations.js";

const form = document.querySelector("#inscription-form");
const allInputs = document.querySelectorAll(
  "#inscription-form input, #inscription-form select"
);

/* Validate each field */
function validateField(event) {
  const input = event.target;
  switch (input.name) {
    case "full_name":
      validateName(input.value, input);
      break;
    case "nickname":
      validateNickname(input.value, input);
      break;
    case "email":
      validateEmail(input.value, input);
      break;
    case "experience_level":
    case "favorite_language":
      validateSelection(input.value, input);
      break;
    case "terms":
      validateTerms(input.checked, input);
      break;
  }
}

for (const input of allInputs) {
  input.addEventListener("input", validateField);
  input.addEventListener("change", validateField);
}

/* Save data to LocalStorage */
function saveToLocalStorage() {
  const formData = {
    full_name: form.full_name.value,
    nickname: form.nickname.value,
    email: form.email.value,
    experience_level: form.experience_level.value,
    favorite_language: form.favorite_language.value,
    terms: form.terms.checked,
  };

  localStorage.setItem("inscriptionData", JSON.stringify(formData));
}

/* Load data when the page loads */
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

/* Load data from LocalStorage */
function loadFromLocalStorage() {
  const storedData = localStorage.getItem("inscriptionData");
  if (storedData) {
    const formData = JSON.parse(storedData);

    form.full_name.value = formData.full_name || "";
    form.nickname.value = formData.nickname || "";
    form.email.value = formData.email || "";
    form.experience_level.value = formData.experience_level || "";
    form.favorite_language.value = formData.favorite_language || "";
    form.terms.checked = formData.terms || false;
  }
}

/* Submit form */
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  isValid &= validateName(form.full_name.value, form.full_name);
  isValid &= validateNickname(form.nickname.value, form.nickname);
  isValid &= validateEmail(form.email.value, form.email);
  isValid &= validateSelection(
    form.experience_level.value,
    form.experience_level
  );
  isValid &= validateSelection(
    form.favorite_language.value,
    form.favorite_language
  );
  isValid &= validateTerms(form.terms.checked, form.terms);

  if (isValid) {
    saveToLocalStorage();
    /* TODO: Clear form  */
    //form.reset();
    window.location.href = "/";
  }
});
