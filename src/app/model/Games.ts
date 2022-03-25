export class Game {
  name: string;
  desc: string;
  platform: string;
  numGame: number;

  constructor(name: string, desc: string, platform: string, numGame: number) {
    this.name = name;
    this.desc = desc;
    this.platform = platform;
    this.numGame = numGame;
  }
}