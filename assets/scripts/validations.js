/* Validate Name */
export function validateName(name, input) {
  if (name.length < 2 || name.length > 50) {
    showError(input, "Debe tener entre 2 y 50 caracteres.");
    return false;
  }
  clearError(input);
  return true;
}

/* Validate Nickname */
export function validateNickname(nickname, input) {
  if (nickname.length < 2 || nickname.length > 20) {
    showError(input, "Debe tener entre 2 y 20 caracteres.");
    return false;
  }
  clearError(input);
  return true;
}

/* Validate Email */
export function validateEmail(email, input) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError(input, "El email no es válido.");
    return false;
  }
  clearError(input);
  return true;
}

/* Validate Selection */
export function validateSelection(value, input) {
  if (!value) {
    showError(input, "Debe seleccionar una opción.");
    return false;
  }
  clearError(input);
  return true;
}

/* Validate Terms */
export function validateTerms(checked, input) {
  if (!checked) {
    showError(input, "Debe aceptar los términos.");
    return false;
  }
  clearError(input);
  return true;
}

/* Show and clear error */
function showError(input, message) {
  console.log(input, message);
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
