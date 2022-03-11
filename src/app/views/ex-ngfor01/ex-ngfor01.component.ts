import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-ngfor01',
  templateUrl: './ex-ngfor01.component.html',
  styleUrls: ['./ex-ngfor01.component.css']
})
export class ExNgfor01Component implements OnInit {

  paises = ['brasil', 'colombia', 'argentina', 'bolivia']
  paisesImg = ['assets/br.png', 'assets/co.png', 'assets/ag.webp', 'assets/bo.svg']

  constructor() { }

  ngOnInit(): void {
  }

  alerta(nomePais:string){
    alert(nomePais);

  }

}
