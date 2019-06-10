import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movietab',
  templateUrl: './movietab.component.html',
  styleUrls: ['./movietab.component.scss']
})
export class MovietabComponent implements OnInit {

  public theUrl: string = "api/movies";

  constructor() {

   }

  ngOnInit() {
    
  }
}
