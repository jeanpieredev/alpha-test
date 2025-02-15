const form = document.querySelector("#inscription-form");
const allInputs = document.querySelectorAll(
  "#inscription-form input, #inscription-form select"
);

/* Validate Name */
function validateName(name, input) {
  if (name.length < 2 || name.length > 50) {
    showError(input, "Debe tener entre 2 y 50 caracteres.");
    return false;
  }
  clearError(input);
  return true;
}

/* Validate Nickname */
function validateNickname(nickname, input) {
  if (nickname.length < 2 || nickname.length > 20) {
    showError(input, "Debe tener entre 2 y 20 caracteres.");
    return false;
  }
  clearError(input);
  return true;
}

/* Validate Email */
function validateEmail(email, input) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError(input, "El email no es válido.");
    return false;
  }
  clearError(input);
  return true;
}

/* Validate Selection */
function validateSelection(value, input) {
  if (!value) {
    showError(input, "Debe seleccionar una opción.");
    return false;
  }
  clearError(input);
  return true;
}

/* Validate Terms */
function validateTerms(checked, input) {
  if (!checked) {
    showError(input, "Debe aceptar los términos.");
    return false;
  }
  clearError(input);
  return true;
}

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

/* Show and clear error */
function showError(input, message) {
  let errorMsg = input.nextElementSibling;

  if (errorMsg?.classList.contains("error-msg")) {
    errorMsg.textContent = message;
  } else {
    errorMsg = document.createElement("span");
    errorMsg.classList.add("error-msg");
    errorMsg.textContent = message;
    input.parentNode.insertBefore(errorMsg, input.nextSibling);
  }
}

function clearError(input) {
  const errorSpan = input.nextElementSibling;
  if (errorSpan?.classList.contains("error-msg")) {
    errorSpan.remove();
  }
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
    form.reset();
  }
});
