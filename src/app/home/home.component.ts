import { Component, OnInit, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from "../shared/repository.service";
import { Cinema } from '../interfaces/cinema';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges{
  public cinemaBuildings: Cinema [] = [];
  public amount: number = 100;

  deposit(){
    this.amount += 1;
  }

  constructor(private http: RepositoryService) { }

  ngOnInit() {
    this.getAllCinemaClientSide();
  }

  ngOnChanges(){
    console.log('pppppppppppppp');
  }



getAllCinemaClientSide(): void {
  let url: string = 'api/cinemas';
  this.http.getData(url).subscribe((res:any) => {
    this.cinemaBuildings = res;
    console.log(this.cinemaBuildings, 'all cinemas');
  })
}

}
