import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  img = 'assets/sora.png'
  roxas = 'assets/roxas.png'

  mudarPersonagem(){
    if(this.img == 'assets/sora.png'){
      this.img = 'assets/roxas.png'
    }else{
      this.img = 'assets/sora.png'
    }
  }

}
