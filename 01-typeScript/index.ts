// Tipo um promp no terminal para node
import * as rs from 'readline-sync';

// const mensagem: string = "Ola mundo";
// console.log(mensagem);

const nome: string = rs.question('digite seu nome: ');
// console.log('Olá' + nome);
const idade = Number(rs.question('Digite sua idade: '));
console.log(`Olá ${nome}, você tem ${idade}`);
