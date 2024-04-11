const form = document.getElementById("formulario");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
const mensagem = document.getElementById('mensagem');
let dados = [];

function setError(index) {
    campos[index].style.border = "2px solid #e63636";
    spans[index].style.display = "block"
}

function removeError(index) {
    campos[index].style.border = "";
    spans[index].style.display = "none"
}


function validarNome() {
    if (campos[0].value.length < 5) {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function validarEmail() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
}

function validarSenha() {
    if (campos[2].value.length < 8) {
        setError(2);
    }
    else {
        removeError(2);
        verificarSenha();
    }
}

function verificarSenha() {
    if (campos[2].value !== campos[3].value) {
        setError(3);
    } else {
        removeError(3);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValido();
    if (!campos[0].value || mensagem.classList.contains('success')) {
        return;
    }
    mensagem.textContent = 'Solicitação enviada com sucesso. Verifique o email cadastrado.';
    mensagem.classList.add('success');
    mensagem.style.display = 'block';
});

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function emailValido() {
    if (!emailRegex.test(campos[0].value)) {
        setError(0);
    } else {
        removeError(0);
    }
}

function insert(num){

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
}