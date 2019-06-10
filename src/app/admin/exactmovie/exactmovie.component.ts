import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-exactmovie',
  templateUrl: './exactmovie.component.html',
  styleUrls: ['./exactmovie.component.scss']
})
export class ExactmovieComponent implements OnInit {

  public theUrl: string;
  public subscribtion: Subscription;



  constructor(activatedRoute: ActivatedRoute, private router: Router) {
   this.subscribtion = activatedRoute.params.subscribe(params => this.theUrl = 'api/cinemas/'+ params['id']);
}

  ngOnInit() {
  }

}
