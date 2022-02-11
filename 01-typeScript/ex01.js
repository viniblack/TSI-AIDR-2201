"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
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
var celsius = Number(rs.question("Digite temperatura em Celsius: "));
var kelin = celsius + 273.15;
var fahrenheit = (celsius * 9 / 5) + 32;
console.log("Kelvin \u00E9 ".concat(kelin, ", Fahrenheit ").concat(fahrenheit));
