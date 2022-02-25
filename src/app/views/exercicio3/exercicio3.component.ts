import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {

  stylePretroleo = 'petroleo';

  texto = 'petrobras'

  constructor() { }

  ngOnInit(): void {
  }

  ficaGrande(palavra: string): string {
    return palavra.toUpperCase();
  }

}
