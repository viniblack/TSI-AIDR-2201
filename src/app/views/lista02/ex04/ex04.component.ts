import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  img = ''
  dog1 = 'assets/dog1.jpg';
  dog2 = 'assets/dog2.jpg';
  dog3 = 'assets/dog3.jpeg';


  btDog1():void{
    this.img = this.dog1
  }

  btDog2():void{
    this.img = this.dog2
  }

  btDog3():void{
    this.img = this.dog3
  }
}
