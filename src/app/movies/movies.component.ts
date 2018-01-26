import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { movies } from '../shared/examples';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private movies;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
