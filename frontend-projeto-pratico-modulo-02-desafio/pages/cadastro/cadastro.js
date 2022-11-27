const registerForm = document.querySelector(".register-form");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const registerButton = document.querySelector(".register-button");
const cancelButton = document.querySelector(".cancel-button");
const errorName = document.querySelector('.error-name');
const errorEmail = document.querySelector(".error-email");
const errorPassword = document.querySelector(".error-password");
const errorMsg = document.querySelector(".error-msg");

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputName.value || !inputEmail.value || !inputPassword.value) {
        errorMsg.innerHTML = 'Você precisa preencher todos os campos';
        return;
    }

    if (inputName.value.length < 3) {
        errorName.innerHTML = 'O nome precisa ter mais de 3 caracteres';
        return;
    }

    if (inputEmail.value.indexOf('@') === -1) {
        errorEmail.textContent = 'Insira um email válido.';
        return;
    }

    if (inputPassword.value.length < 8) {
        errorPassword.textContent = 'Insira uma senha com pelo menos 8 caracteres';
        return;
    } else {
        window.location = "../home/home.html";
    }

});

function cleanModal() {

    if (inputName.value || inputEmail.value || inputPassword.value) {
        inputName.value = '';
        inputEmail.value = '';
        inputPassword.value = '';
    }
}

