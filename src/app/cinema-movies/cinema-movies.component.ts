import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RepositoryService } from "../shared/repository.service";
import { MovieInfo } from "../classes/movieInfo";
import { MovieId } from "../classes/movieId";

@Component({
  selector: 'app-cinema-movies',
  templateUrl: './cinema-movies.component.html',
  styleUrls: ['./cinema-movies.component.scss']
})
export class CinemaMoviesComponent implements OnInit {
  public id: number;
  public movieInfo: MovieInfo[] = [];
  public movieId: MovieId[]=[];
  public subscribtion: Subscription;
  public cinemaName:string="";


  constructor(activatedRoute: ActivatedRoute, private http: RepositoryService, private router: Router) {
   this.subscribtion = activatedRoute.params.subscribe(params => this.id = params['id']);
}

  ngOnInit() {
    this.getAllMoviesByCinemaId();
  }

  showAllMovies():void {
    let url: string = 'api/movies';
    this.http.getData(url).subscribe((res:any) => {
      this.movieInfo = res;
    }, error => console.log(error, 'error getting All movies'));
  }

  getAllMoviesByCinemaId(){
    let url = 'api/cinemas/'+this.id;
    this.http.getData(url).subscribe((res:any) => {
      this.movieId = res.data.movieList;
      console.log(this.movieId, 'the movies of exact cinema');
    }, error => console.log(error, 'error getting the movies of exact cinema'));
  }

}
