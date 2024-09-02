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

  addToFavorites(movie: any): void {
    this.addToFavorites.addToFavorites(movie.Title).subscribe((resp: any) => {
      const user = JSON.parse(localStorage.getItem('currentUser') || '');
      user.FavoriteMovies.push(movie.TItle);
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }

  removeFromFavorites(movie: any): void {
    this.removeFromFavorites
      .removeFromFavorites(movie.Title)
      .subscribe((resp: any) => {
        const user = JSON.parse(localStorage.getItem('currentUser') || '');
        user.FavoriteMovies = user.FavoriteMovies.filter(
          (title: string) => title !== movie.Title
        );
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.FavoriteMovies = this.addToFavorites.filter(
          (title: string) => title !== movie.Title
        );
      });
  }

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

  /**
   * @param {any} movie
   * @return {void}
   * This function shows the synopsis
   */
  showSynopsis(movie: any): void {
    alert(`Synopsis: Description:  ${movie.Description}`);
  }
}
