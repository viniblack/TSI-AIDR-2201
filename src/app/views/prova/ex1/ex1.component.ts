import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName = ''
  lastname = ''
  fullname = ''


   funcFullname(){
    return this.fullname =  this.firstName.toLowerCase() +' '+ this.lastname.toLowerCase()
  }
}
