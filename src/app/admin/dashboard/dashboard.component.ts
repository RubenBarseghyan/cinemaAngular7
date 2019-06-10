import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cinemalist = 'cinemalist';
  movielist = 'movielist';
  searchuser = 'searchuser';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut():void {
   localStorage.removeItem('userInfo');
   this.router.navigate(['login'])
  }
  login():void {
    this.router.navigate(['login']);
  }

  goToCinemaList(){
    this.router.navigate(['admin/cinemalist']);
  }

  goToMovieList(){
    this.router.navigate(['admin/movielist']);
  }

  goToSeachUser(){
    this.router.navigate(['admin/searchuser']);
  }

}
