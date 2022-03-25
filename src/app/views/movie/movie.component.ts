import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = Array<Movie>();
  curMovie?: Movie;

  constructor() {
    const matrix = new Movie('Matrix', 5);
    const rambo = new Movie('Rambo', 4)
    const batman = new Movie('The Batman', 2);
    this.movies.push(matrix, rambo, batman);
  }

  ngOnInit(): void {
  }

  selectMovie(movie: Movie) {
    this.curMovie = movie;
  }

  newMovie() {
    this.curMovie = new Movie('', 0);
  }

  save() {
    if (this.curMovie) {
      this.movies.push(this.curMovie);
      this.curMovie = undefined;
    }
  }

  cancel() {
    this.curMovie = undefined;
  }

  remove(pos: number) {
    this.movies.splice(pos, 1);
  }
}
