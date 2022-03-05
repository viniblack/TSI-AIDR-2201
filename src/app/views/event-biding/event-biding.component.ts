import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-biding',
  templateUrl: './event-biding.component.html',
  styleUrls: ['./event-biding.component.css']
})
export class EventBidingComponent implements OnInit {

  constructor() { }

  img = 'assets/sora.png';
  roxas = 'assets/roxas.png';

  ngOnInit(): void {
  }

  mudarPersonagem(){
    if(this.img == 'assets/sora.png'){
      this.img = 'assets/roxas.png';
    }else{
      this.img = 'assets/sora.png';
    }
  }

}
