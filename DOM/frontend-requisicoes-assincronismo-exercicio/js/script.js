const name = document.querySelectorAll('h1');
const email = document.querySelectorAll('span');
const tel = document.querySelectorAll('strong');

async function loadUser() {

    const response = await api.get('/users')

    for (let i = 0; i < name.length; i++) {
        name[i].textContent = response.data[i].name
        email[i].textContent = response.data[i].email
        tel[i].textContent = response.data[i].phone
    }
}
loadUser()