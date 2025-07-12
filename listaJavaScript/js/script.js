//Exercicio 1
function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);
}

//Exercicio 2
function verificar() {
    let idade = Number(document.getElementById("idade").value);
    if (idade >= 18) {
        document.getElementById("resultado2").innerText = "Resultado: MAIOR de idade";
    } else {
        document.getElementById("resultado2").innerText = "Resultado: MENOR de idade";
    }
}

//Exercicio 3
function contarCaracteres() {
    let texto = String(document.getElementById("texto").value);
    document.getElementById("resultado3").innerText = "Resultado: " + texto.length;
}

//Exercicio 4
function verificarParImpar() {
    let num = Number(document.getElementById("numero").value);
    if (num % 2 == 0) {
        document.getElementById("resultado4").innerText = "Resultado: PAR";
    } else {
        document.getElementById("resultado4").innerText = "Resultado: ÍMPAR";
    }
}

//Exercicio 5
function transformarMaiuscula() {
    let nome = String(document.getElementById("name").value);
    document.getElementById("resultado5").innerText = "Resultado: " + nome.toUpperCase();
}

//Exercicio 6
function calcularMaiorValor() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    let resultado = " ";
    if (n1 > n2) {
        resultado = "Resultado: O maior valor é " + n1;
    } else if (n2 > n1) {
        resultado = "Resultado: O maior valor é " + n2;
    } else {
        resultado = "Resultado: Os dois valores são iguais";    
    }

    document.getElementById("resultado6").innerText = resultado;
}

//Exercicio 7
function gerarTabuada() {
    let valor = document.getElementById("numeroTabuada").value;
    let resultado = document.getElementById("resultado7");

    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `<p>${valor} x ${i} = ${valor * i}</p>`;
    }
}

// Exercício 8
function contarDeUmADez() {
    let resultado = document.getElementById("resultado8");
    resultado.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `<p>${i}</p>`;
    }
}

// Exercício 9
function calcularMedia() {
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let resultado = "";

    let media = (n1 + n2 + n3) / 3;

    if (media >= 6) {
        resultado = "Resultado: Aprovado!";
    } else {
        resultado = "Resultado: Reprovado! ";
    }
    document.getElementById("resultado9").innerText = `Média: ${media.toFixed(2)} - ${resultado}`;
}

// Exercício 10
function converterParaFahrenheit() {
    let c = Number(document.getElementById("celsius").value);
    let f = (c * 9 / 5) + 32;
    document.getElementById("resultado10").innerText = `Temperatura em Fahrenheit: ${f.toFixed(2)} °F`;
}

// Exercício 11
function verificarDiaSemana() {
    let n = Number(document.getElementById("diaNumero").value);
    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    if (n >= 1 && n <= 7) {
        document.getElementById("resultado11").innerText = `Dia da semana: ${dias[n - 1]}`;
    } else {
        document.getElementById("resultado11").innerText = "Número inválido. Digite de 1 a 7.";
    }
}

// Exercício 12
function verificarSenha() {
    let senha = document.getElementById("senha").value;

    if (senha === "1234") {
        document.getElementById("resultado12").innerText = "Acesso permitido!";
    } else {
        document.getElementById("resultado12").innerText = "Senha incorreta.";
    }
}

// Exercício 13
function contagemRegressiva() {
    let resultado = document.getElementById("resultado13");
    resultado.innerHTML = "";

    for (let i = 10; i >= 1; i--) {
        resultado.innerHTML += `<p>${i}</p>`;
    }
}