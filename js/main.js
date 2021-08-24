let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

let pacientes = document.querySelectorAll(".paciente");

/* console.log(paciente);
 */
for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i]

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoValido = true;
    let alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    let pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    /*  imcTd.textContent = imc; */

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


    console.log(pacienteTr);
    /*   console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);
 */
});


titulo.addEventListener("click", function() {
        console.log("fui clicado");
    })
    /* console.log("Oi eu sou o botao e fui clicado"); */