import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l04-ex01',
  templateUrl: './l04-ex01.component.html',
  styleUrls: ['./l04-ex01.component.css'],
})
export class L04Ex01Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nome = ''
  sobrenome = ''
  texto = ''

  escreva(){
   this.texto = `${this.nome} ${this.sobrenome}`
  }

  
}
