import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  constructor(
    public fetchMovies: UserRegistrationService,
    private router: Router
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

  showGenre(movie: any): void {}

  showDirector(movie: any): void {}

  showSynopsis(movie: any): void {}
}
