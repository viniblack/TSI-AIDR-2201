"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
// ========================== LISTA 01 ==========================================
// 1. Implemente um algoritmo que leia três números e imprima na tela o produto
// (multiplicação) dos três números.
// const n1: number = Number(rs.question("Digite um numero: "));
// const n2: number = Number(rs.question("Digite outro numero: "));
// const n3: number = Number(rs.question("Digite mais um numero: "));
// let result: number = n1 * n2 * n3;
// console.log(`Resultado é ${result}`);
// 2. Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final ponderada
// deste aluno. Considerar o peso das notas como 2, 3 e 5, respectivamente.
// const nota1: number = Number(rs.question("Digite nota 1: "));
// const nota2: number = Number(rs.question("Digite nota 2: "));
// const nota3: number = Number(rs.question("Digite nota 3: "));
// let media: number = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;
// console.log(`Resultado é ${media}`);
// 3. Elabore um programa capaz de ler a base e a altura de um triângulo para, em seguida,
// escrever a sua área
// const base: number = Number(rs.question("Base do triagulo: "));
// const altura: number = Number(rs.question("Altura do triangulo: "));
// let areaTriangulo = (base * altura) / 2;
// console.log(`A area do triangulo é ${areaTriangulo}`);
// 4. Elabore um programa que permita ao usuário informar determinada temperatura em
// graus Celsius e converta e exiba seus respectivos valores em graus Kelvin e Fahrenheit
// const celsius: number = Number(rs.question("Digite temperatura em Celsius: "));
// let kelin: number = celsius + 273.15;
// let fahrenheit: number = (celsius * 9 / 5) + 32;
// console.log(`Kelvin é ${kelin}, Fahrenheit ${fahrenheit}`);
// 5. Monte um programa que leia quanto tempo uma pessoa joga determinado jogo por dia e
// quantos dias na semana isso acontece. Em seguida, calcule e exiba na tela quanto tempo
// (aproximadamente, em horas) a pessoa terá dedicado ao jogo ao final de um ano.
// const horasJogadas = Number(rs.question("Digite quanto tempo voce joga por dia"));
// const diasJogados = Number(rs.question("Digite quantos dias da semana voce joga"));
// let anoJogado:number = ((horasJogadas * diasJogados)*52 / diasJogados) * 12;
// console.log(`você joga ${anoJogado} horas por ano`);
// ========================== LISTA 02 ==========================================
// 1. Crie um programa que solicite ao usuário a digitação de um número. Informe então se este número é
// par ou ímpar.
// const numUser: number = Number(rs.question('Digite um número'));
// numUser % 2 == 0
//   ? console.log('Esse número é par')
//   : console.log('Esse número é impar');
// 2. Elaborar uma questão de múltipla escolha, de uma disciplina que esteja cursando ou um tema de
// interesse, com um enunciado e cinco alternativas, sendo uma correta ou incorreta. Escrever um
// programa que mostra a questão na tela, pede a resposta correta e informa ao usuário se este acertou
// ou errou.
// console.log('Quem é o maior coveiro do SENAC');
// const pergunta = String(rs.question('a) Gui b) Gustavo c) Rodrigo d) Vini e) Todos R: ')).toUpperCase();
// if (pergunta == 'E' || pergunta == 'E)' ) {
//   console.log('Acertou!');
// } else {
//   console.log('Errou!');
// }
// 3. Um ano é bissexto se for divisível por 4 exceto os séculos, que são bissextos se forem múltiplos de 400.
// Escreva um programa que lê um ano e determina se este é bissexto.
var pergunta = Number(rs.question('Digite um ano: '));
if (pergunta % 4 == 0 && pergunta % 400 == 0 || pergunta % 100 != 0) {
    console.log('É um ano bissexto');
}
else {
    console.log('Não é um ano bissexto');
}
