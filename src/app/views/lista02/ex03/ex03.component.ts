import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css'],
})
export class Ex03Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  classeCss: string = 'vermelho';

  mudaCor(): void {
    if (this.classeCss == 'vermelho') {
      this.classeCss = 'azul';
    } else {
      this.classeCss = 'vermelho';
    }
  }
}
