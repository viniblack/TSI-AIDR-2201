import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista04-ex04',
  templateUrl: './lista04-ex04.component.html',
  styleUrls: ['./lista04-ex04.component.css']
})
export class Lista04Ex04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome = '';
  tel = '';
  email = '';
  texto = '';

  checkTelefone = false;
  checkWhats = false;
  checkEmail = false;

  mostraDados(){
    this.texto = `Seu nome é ${this.nome} seu telefone é ${this.tel} seu email 
    ${this.email} você quer contato por telefone: ${this.checkTelefone} Whats: ${this.checkWhats} Email: ${this.checkEmail}`
  }
}
