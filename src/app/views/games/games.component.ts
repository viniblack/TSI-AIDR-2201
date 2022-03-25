import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/Games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games = Array<Game>();
  curGame?: Game;


  constructor() {
    const cs = new Game('Counter Strike', 'FPS', 'PC', 5);
    const vava = new Game('Valorant', 'FPS', 'PC', 6);
    this.games.push(cs, vava)
  }

  ngOnInit(): void {
  }

  selectGame(game: Game) {
    this.curGame = game;
  }

  newGame() {
    this.curGame = new Game('', '', '', 0);
  }

  save() {
    if (this.curGame) {
      this.games.push(this.curGame);
      this.curGame = undefined;
    }
  }

  cancel() {
    this.curGame = undefined;
  }
  remove(pos: number) {
    this.games.splice(pos, 1)
  }
}
