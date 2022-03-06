import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nomeMusica:string = 'Umbrella';
  nomeAlbum:string = 'Good Girl Gone Bad';
  nomeArtista:string = 'Rihanna';


}
