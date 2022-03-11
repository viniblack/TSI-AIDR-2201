import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  vertorAnimais = ['cachorro', 'gato', 'passaro', 'peixe', 'macaco']

  images = ['assets/dog1.jpg','assets/dog2.jpg','assets/dog3.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
