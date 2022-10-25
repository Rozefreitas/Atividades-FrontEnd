const text = document.querySelector('.text');

const button = document.querySelector('.button-sublinhado');

button.onclick = () => {

    if (text.style.textDecoration === 'underline') {
        text.style.textDecoration = 'none';
        return;
    }
    text.style.textDecoration = 'underline';

}

const buttonItalico = document.querySelector('.button-italico');

buttonItalico.onclick = () => {

    if (text.style.fontStyle === 'italic') {
        text.style.fontStyle = 'normal';
        return;
    }
    text.style.fontStyle = 'italic';

}

const buttonNegrito = document.querySelector('.button-negrito');

buttonNegrito.onclick = () => {

    if (text.style.fontWeight === 'bold') {
        text.style.fontWeight = 'normal';
        return;
    }
    text.style.fontWeight = 'bold';
}

const fontInicial = document.querySelector('.font-inicial');

function formatarFonte() {

    return parseInt(text.style.fontSize.split('px')[0] || 12)

}

const buttonMenos = document.querySelector('.button-menos');

buttonMenos.onclick = () => {

    if (formatarFonte() > 12) {
        text.style.fontSize = `${formatarFonte() - 2}px`
    }
    fontInicial.textContent = formatarFonte();
}

const buttonMais = document.querySelector('.button-mais');

buttonMais.onclick = () => {

    text.style.fontSize = `${formatarFonte() + 2}px`

    fontInicial.textContent = formatarFonte();
}

const buttonVermelho = document.querySelector('.button-vermelho');

buttonVermelho.onclick = () => {


    if (text.style.color === 'red') {
        text.style.color = 'black';
        return;
    }
    text.style.color = 'red';

}

const buttonAzul = document.querySelector('.button-azul');

buttonAzul.onclick = () => {


    if (text.style.color === 'blue') {
        text.style.color = 'black';
        return;
    }
    text.style.color = 'blue';

}

const buttonRoxo = document.querySelector('.button-roxo');

buttonRoxo.onclick = () => {


    if (text.style.color === 'purple') {
        text.style.color = 'black';
        return;
    }
    text.style.color = 'purple';

}

const buttonPreto = document.querySelector('.button-preto');

buttonPreto.onclick = () => {


    if (text.style.color === 'black') {
        text.style.color = 'black';
        return;
    }
    text.style.color = 'black';

}






