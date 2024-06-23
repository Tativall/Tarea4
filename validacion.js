function emailValidation() {
  const form = document.getElementById('form');
  const email = form.email;
  const emailConfirm = form.email_confirm;
  const errorMessageContainer = document.getElementById('email-confirm-error');
  const errorRow = document.getElementById('error-row');

  function validateEmails() {
    if (email.value !== emailConfirm.value) {
      emailConfirm.classList.add('error');
      errorMessageContainer.textContent = "Los correos electrónicos no coinciden";
      errorRow.style.display = "table-row";
    } else {
      emailConfirm.classList.remove('error');
      errorMessageContainer.textContent = "";
      errorRow.style.display = "none";
    }
  }

  email.addEventListener('input', validateEmails);
  emailConfirm.addEventListener('input', validateEmails);

  form.addEventListener('submit', function (e) {
    validateEmails();
    if (email.value !== emailConfirm.value) {
      e.preventDefault();
    }
  });
}

window.onload = emailValidation;
