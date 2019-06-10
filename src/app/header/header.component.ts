import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

ngOnInit() {
}

logOut():void {
   localStorage.removeItem('userInfo');
   this.router.navigate(['login'])
}
goToHome():void {
  this.router.navigate(['home'])
}


}
