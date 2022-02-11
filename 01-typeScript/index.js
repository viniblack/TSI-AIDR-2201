"use strict";
exports.__esModule = true;
// Tipo um promp no terminal para node
var rs = require("readline-sync");
// const mensagem: string = "Ola mundo";
// console.log(mensagem);
var nome = rs.question('digite seu nome: ');
// console.log('Olá' + nome);
var idade = Number(rs.question('Digite sua idade: '));
console.log("Ol\u00E1 ".concat(nome, ", voc\u00EA tem ").concat(idade));
