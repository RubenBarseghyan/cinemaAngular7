import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(jwtHelper: JwtHelperService) { }

  public isAuthenticated():boolean{
    if(!localStorage.getItem('userInfo')) {
      return false;
    }
    const userRole = JSON.parse(localStorage.getItem('userInfo')).role;
    if(userRole!=="user"){
      return false;
    }
    const token = JSON.parse(localStorage.getItem('userInfo')).token;
      // const {token} = JSON.parse(localStorage.getItem('currentUser'));
    return !this.jwtHelper.isTokenExpired(token);
  }
  public isAdminAuthenticated(): boolean{
    if(!localStorage.getItem('userInfo')) {
      return false;
    }
    const userRole = JSON.parse(localStorage.getItem('userInfo')).role;
    if(userRole!=="admin"){
      return false;
    }
    const token = JSON.parse(localStorage.getItem('userInfo')).token;
    return !this.jwtHelper.isTokenExpired(token);
  }
}
