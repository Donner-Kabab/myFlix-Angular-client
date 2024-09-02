import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  constructor(
    public fetchMovies: UserRegistrationService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  //navigate to profile
  navigateToUserProfile(): void {
    this.router.navigate(['/user-profile']);
  }

  getMovies(): void {
    this.fetchMovies.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  favoriteMovies(movie: any): void {}

  showGenre(movie: any): void {
    alert(`Name: ${movie.Genre.Name}
    Description:  ${movie.Genre.Description}`);
  }

  showDirector(movie: any): void {
    alert(`Name: ${movie.Director.Name}
    Bio:  ${movie.Director.Bio}
    Birth:  ${movie.Director.Birth}
    Death:  ${movie.Director.Death}`);
  }

  showSynopsis(movie: any): void {
    alert(`Synopsis: Description:  ${movie.Description.slice(0, 50)}...`);
  }
}
