import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../shared/repository.service';
import { Subscription } from 'rxjs';
import { MovieId } from '../classes/movieId';

import { DomSanitizer } from '@angular/platform-browser';
//make component open materian MatDialog
import { MatDialog, MatDialogConfig } from '@angular/material'; //npm install --save @angular/material@next @angular/cdk@next //ng add @angular/material
import {HallComponent } from '../hall/hall.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-movie-present',
  templateUrl: './movie-present.component.html',
  styleUrls: ['./movie-present.component.scss']
})
export class MoviePresentComponent implements OnInit {
  paramId: number;
  subscribtion: Subscription;
  movieIdArray: MovieId []=[];

  constructor(private http: RepositoryService,
   private router: Router,
   private activatedRoute:ActivatedRoute,
   private sanitizer: DomSanitizer,
   public dialog: MatDialog) {
   this.subscribtion = activatedRoute.params.subscribe(params => this.paramId = params['movieId']);
  }

  ngOnInit() {
    this.presentMoviebyCinemaId();
  }

  public openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
          id: 1,
          description: 'Send data from componet to the Material Dialog component'
      };
      const dialogRef = this.dialog.open(HallComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data:any)=>{
      console.log('outputppppppppppppppppppppppppppppppp',data);
    })
  }
  presentMoviebyCinemaId():void {
    let url = 'api/movies/' + this.paramId;
    this.http.getData(url).subscribe((res:any) => {
      this.movieIdArray = res;
      console.log(this.movieIdArray, 'movies by id');
    }, error => console.log(error.message));
  }

}
