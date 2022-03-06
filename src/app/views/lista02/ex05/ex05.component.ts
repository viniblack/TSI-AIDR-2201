import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  letNome: null | string = '';
  
  btNome() {
    this.letNome = prompt("Qual é o seu nome?")
  }
  
}
