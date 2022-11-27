const formLogin = document.querySelector(".form-login");
const inputCardEmail = document.querySelector(".input-card-email");
const inputCardPassword = document.querySelector(".input-card-password");
const loginButton = document.querySelector(".login-button");
const errorLoginEmail = document.querySelector(".error-login-email");
const errorLoginPassword = document.querySelector(".error-login-password");
const errorLogin = document.querySelector(".error-login");

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputCardEmail.value || !inputCardPassword.value) {
        errorLogin.innerHTML = 'Você precisa preencher todos os campos';
        return;
    }

    if (inputCardEmail.value.indexOf('@') === -1) {
        errorLoginEmail.textContent = 'Insira um email válido.';
        return;
    }

    if (inputCardPassword.value.length < 8) {
        errorLoginPassword.textContent = 'Insira uma senha com pelo menos 8 caracteres';
        return;
    } else {
        window.location = "../home/home.html";
    }

});