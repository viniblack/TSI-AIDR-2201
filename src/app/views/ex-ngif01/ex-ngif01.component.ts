import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-ngif01',
  templateUrl: './ex-ngif01.component.html',
  styleUrls: ['./ex-ngif01.component.css']
})
export class ExNgif01Component implements OnInit {

  n1: number = 0
  n2: number = 0
  resultado: number = 0
  operador = ''

  constructor() { }

  ngOnInit(): void {
  }

  calculadora(operador:string) {
    if (operador == '+') {
      this.resultado = this.n1 + this.n2
    }else if (operador == '-') {
      this.resultado = this.n1 - this.n2
    }else if(operador == '*') {
      this.resultado = this.n1 * this.n2
    }else{
      this.resultado = this.n1 / this.n2
    }
  }

}