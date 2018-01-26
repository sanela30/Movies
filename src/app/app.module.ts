import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from './shared/shared.module';

import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]

})export class AppModule { }



