import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  constructor() { }
  styleCss = ''
  ngOnInit(): void {
  }

  mudarCor(cor:string){
    if(cor == 'vermelho'){
    this.styleCss = 'vermelho'
    }else if(cor == 'verde'){
      this.styleCss = 'verde'
    }else if(cor == 'azul'){
      this.styleCss = 'azul'
    }else{
      this.styleCss = ''
    }
  }
}
