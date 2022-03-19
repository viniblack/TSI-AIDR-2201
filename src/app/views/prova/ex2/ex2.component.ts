import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  img =''
  
  mudarImg(btnImg: string){
    if (btnImg == 'img1') {
      this.img = 'assets/dog1.jpg'
    }else if(btnImg == 'img2') {
      this.img = 'assets/dog2.jpg'
    }else if(btnImg == 'img3') {
      this.img = 'assets/dog3.jpg'
    }else {
      this.img = 'assets/brasil.png'
    }
  }
}
