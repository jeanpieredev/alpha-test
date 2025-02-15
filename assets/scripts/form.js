const form = document.querySelector("#inscription-form");

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

function validateName(name, input) {
  if (name.length < 2 || name.length > 50) {
    showError(input, "Debe tener entre 2 y 50 caracteres.");
    return false;
  }
  clearError(input);
  return true;
}

function validateNickname(nickname, input) {
  if (nickname.length < 2 || nickname.length > 20) {
    showError(input, "Debe tener entre 2 y 20 caracteres.");
    return false;
  }
  clearError(input);
  return true;
}

function validateEmail(email, input) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError(input, "El email no es válido.");
    return false;
  }
  clearError(input);
  return true;
}

function validateSelection(value, input) {
  if (!value) {
    showError(input, "Debe seleccionar una opción.");
    return false;
  }
  clearError(input);
  return true;
}

function validateTerms(checked, input) {
  if (!checked) {
    showError(input, "Debe aceptar los términos.");
    return false;
  }
  clearError(input);
  return true;
}

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

const allInputs = document.querySelectorAll(
  "#inscription-form input, #inscription-form select"
);
for (const input of allInputs) {
  input.addEventListener("input", validateField);
  input.addEventListener("change", validateField);
}
