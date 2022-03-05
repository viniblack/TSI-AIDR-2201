import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  img1 = 'assets/download.png';
  img2 = 'assets/react.png';
  img3 = 'assets/vuejs-wide.png';
  
  styleImg1 = 'img1';
  styleImg2 = 'img2';
  styleImg3 = 'img3';
}
