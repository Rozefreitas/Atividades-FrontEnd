const openModalButton = document.querySelector(".open-modal-button");
const closeModalButton = document.querySelector(".close-modal-button");
const modalContainer = document.querySelector(".modal-container");
const form = document.querySelector("form");
const deleteModalContainer = document.querySelector(".delete-modal-container ");
const inputModalName = document.querySelector(".input-modal-name");
const inputModalEmail = document.querySelector(".input-modal-email");
const inputModalTel = document.querySelector(".input-modal-tel");
const errorMsgModal = document.querySelector(".error-msg-modal");
const buttonClean = document.querySelector(".button-clean");


form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputModalName.value || !inputModalEmail.value || !inputModalTel.value) {
        errorMsgModal.innerHTML = 'Você precisa preencher todos os campos.';
        return;
    } else {
        window.location = "../home/home.html";
    }

});

function openModal() {

    modalContainer.style.display = 'block';
}

function closeModal() {

    modalContainer.style.display = 'none';
    deleteModalContainer.style.display = 'none';
}

function openDeleteModal() {

    deleteModalContainer.style.display = ' block';
}

function cleanModal() {

    if (inputModalName.value || inputModalEmail.value || inputModalTel.value) {
        inputModalName.value = '';
        inputModalEmail.value = '';
        inputModalTel.value = '';
    }
}






