import { Injectable } from '@angular/core';
import { movies } from '../shared/examples';
import { Observer,Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

  private list: Array<Movie>;
  
  constructor() {
    this.list = movies.map(this.mapMovies);
   }

  public getMovies()
  {

    return new Observable((o:Observer<any>)=>
    {
      o.next(this.list);    
       return o.complete();
    }
    );
  }

  public mapMovies(movie)
 {
    return new Movie (
      movie.id,
      movie.name,
      movie.director,
      movie.ImageUrl,
      movie.duration,
      movie.releaseDate,
      movie.genres
   );
  } 
}