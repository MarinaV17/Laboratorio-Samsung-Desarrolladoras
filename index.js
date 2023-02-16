function nameValid() {
  let nameBox = document.getElementById("name");
  let nameSuccess = /^[a-zA-Z]+$/;
  let nameError = document.getElementById("name-error");

  if (nameBox.value == 0) {
    nameError.innerHTML = "Rellene este campo";
    nameBox.classList.add("error");
    nameBox.classList.add("error-icon");
    return false;
  } else if (nameSuccess.test(nameBox.value)) {
    nameBox.classList.remove("error");
    nameBox.classList.remove("error-icon");
    nameError.innerHTML = "";
    nameBox.classList.add("success");
    nameBox.classList.add("success-icon");
    return true;
  } else {
    nameError.innerHTML = "Nombre inválido";
    nameBox.classList.add("error");
    nameBox.classList.add("error-icon");
    return false;
  }
}

function emailValid() {
  let emailBox = document.getElementById("email");
  let emailSuccess =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailError = document.getElementById("email-error");

  if (emailBox.value == 0) {
    emailError.innerHTML = "Rellene este campo";
    emailBox.classList.add("error");
    emailBox.classList.add("error-icon");
    return false;
  } else if (emailSuccess.test(emailBox.value)) {
    emailBox.classList.remove("error");
    emailBox.classList.remove("error-icon");
    emailError.innerHTML = "";
    emailBox.classList.add("success");
    emailBox.classList.add("success-icon");
    return true;
  } else {
    emailError.innerHTML = "Email inválido";
    emailBox.classList.add("error");
    emailBox.classList.add("error-icon");
    return false;
  }
}

function passwordValid() {
  let passwordBox = document.getElementById("password");
  let passwordSuccess = /^[A-Za-z]\w{1,8}$/;
  let passwordError = document.getElementById("password-error");

  if (passwordBox.value == 0) {
    passwordError.innerHTML = "Rellene este campo";
    passwordBox.classList.add("error");
    passwordBox.classList.add("error-icon");
    return false;
  } else if (passwordSuccess.test(passwordBox.value)) {
    passwordBox.classList.remove("error");
    passwordBox.classList.remove("error-icon");
    passwordError.innerHTML = "";
    passwordBox.classList.add("success");
    passwordBox.classList.add("success-icon");
    return true;
  } else {
    passwordError.innerHTML = "No debe tener más de 8 caracteres";
    passwordBox.classList.add("error");
    return false;
  }
}

function passwordConfirmationValid() {
  let passwordConfirmationBox = document.getElementById(
    "password-confirmation"
  );
  let passwordConfirmationSuccess = document.getElementById("password");
  let passwordConfirmationError = document.getElementById(
    "password-confirmation-error"
  );

  if (passwordConfirmationBox.value == 0) {
    passwordConfirmationError.innerHTML = "Rellene este campo";
    passwordConfirmationBox.classList.add("error");
    passwordConfirmationBox.classList.add("error-icon");
    return false;
  } else if (
    passwordConfirmationSuccess.value == passwordConfirmationBox.value
  ) {
    passwordConfirmationBox.classList.remove("error");
    passwordConfirmationBox.classList.remove("error-icon");
    passwordConfirmationError.innerHTML = "";
    passwordConfirmationBox.classList.add("success");
    passwordConfirmationBox.classList.add("success-icon");
    return true;
  } else {
    passwordConfirmationError.innerHTML = "Las contraseñas no coinciden";
    passwordConfirmationBox.classList.add("error");
    passwordConfirmationBox.classList.add("error-icon");
    return false;
  }
}

function formValid() {
  if (
    nameValid() &&
    emailValid() &&
    passwordValid() &&
    passwordConfirmationValid()
  ) {
    alert("La inscripción se ha realizado correctamente");
    return true;
  } else {
    return false;
  }
}
