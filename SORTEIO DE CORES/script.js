const boxRed = document.querySelector('.red');
const boxBlue = document.querySelector('.blue');
const boxPurple = document.querySelector('.purple');
const boxOrange = document.querySelector('.orange');

function tirarSelecao() {

    boxRed.classList.remove('selected');
    boxBlue.classList.remove('selected');
    boxPurple.classList.remove('selected');
    boxOrange.classList.remove('selected');

}

boxRed.onclick = () => {

    tirarSelecao();
    boxRed.classList.toggle('selected');
    botaoSelecionado = 'red';

}

boxBlue.onclick = () => {

    tirarSelecao();
    boxBlue.classList.toggle('selected');
    botaoSelecionado = 'blue';

}

boxPurple.onclick = () => {

    tirarSelecao();
    boxPurple.classList.toggle('selected');
    botaoSelecionado = 'purple';

}

boxOrange.onclick = () => {

    tirarSelecao();
    boxOrange.classList.toggle('selected');
    botaoSelecionado = 'orange';

}

const containerRandom = document.querySelector('.container-random');
const sortear = document.querySelector('button');
const h2Result = document.querySelector('.h2-result');
let botaoSelecionado = ' ';

sortear.onclick = () => {

    const botoes = ['red', 'blue', 'purple', 'orange'];
    let sorteioDeCor = botoes[Math.floor(Math.random() * 4)];


    if (botaoSelecionado === sorteioDeCor) {
        h2Result.textContent = 'Parabéns você acertou!'
    } else if (botaoSelecionado === ' ') {
        h2Result.textContent = 'Selecione uma cor!'
    } else {
        h2Result.textContent = 'tente novamente!'
    }

}







