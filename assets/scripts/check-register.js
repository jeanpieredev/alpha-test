import {
  validateName,
  validateNickname,
  validateEmail,
  validateSelection,
  validateTerms,
} from "./validations.js";

const sectionIsRegistered = document.getElementById("is-registered");
const sectionIsNotRegistered = document.getElementById("is-not-registered");

function isRegistered() {
  return localStorage.getItem("inscriptionData") !== null;
}

function updateText(id, label, value) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = `<strong>${label}:</strong> ${
      value || "No especificado"
    }`;
  }
}

if (isRegistered()) {
  sectionIsRegistered.classList.remove("hidden");
  sectionIsNotRegistered.classList.add("hidden");

  try {
    const inscriptionData = JSON.parse(localStorage.getItem("inscriptionData"));

    if (inscriptionData) {
      updateText(
        "full-name",
        "Nombre Completo",
        validateName(inscriptionData.full_name, {})
          ? inscriptionData.full_name
          : "Dato inválido"
      );

      updateText(
        "nickname",
        "Alias/Nickname",
        validateNickname(inscriptionData.nickname, {})
          ? inscriptionData.nickname
          : "Dato inválido"
      );

      const nicknameTitle = document.getElementById("nicknameTitle");
      if (nicknameTitle) {
        nicknameTitle.textContent = validateNickname(
          inscriptionData.nickname,
          {}
        )
          ? inscriptionData.nickname
          : "Sin alias";
      }

      updateText(
        "email",
        "Email",
        validateEmail(inscriptionData.email, {})
          ? inscriptionData.email
          : "Dato inválido"
      );

      updateText(
        "experience-level",
        "Nivel de Experiencia",
        validateSelection(inscriptionData.experience_level, {})
          ? inscriptionData.experience_level
          : "Dato inválido"
      );

      updateText(
        "favorite-language",
        "Lenguaje Favorito",
        validateSelection(inscriptionData.favorite_language, {})
          ? inscriptionData.favorite_language
          : "Dato inválido"
      );

      updateText(
        "terms",
        "Acepto los términos y condiciones",
        validateTerms(inscriptionData.terms, {}) ? "Sí" : "No"
      );
    } else {
      console.warn("Los datos de inscripción están corruptos o vacíos.");
    }
  } catch (error) {
    console.error("Error al recuperar los datos de inscripción:", error);
  }
}
