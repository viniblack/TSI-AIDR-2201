import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista04-ex05',
  templateUrl: './lista04-ex05.component.html',
  styleUrls: ['./lista04-ex05.component.css'],
})
export class Lista04Ex05Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dog = '';
  texto = '';

  descricao() {
    if (this.dog != '') {
      if (this.dog == 'dog1') {
        this.texto = 'dog1 é meio... sei la';
      
      } else if (this.dog == 'dog2') {
        this.texto = 'dog2 é estranho';
      } else {
        this.texto = 'dog3 é um meme';
      }
    }else{
      this.texto = 'Selecione um dog';
    }
  }

  limpar(){
    this.dog = '';
    this.texto = '';
  
  }

  teste(){
    this.texto = '';
  }
}
