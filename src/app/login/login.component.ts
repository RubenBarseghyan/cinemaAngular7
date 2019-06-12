import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from "../classes/user";
import { RepositoryService } from "../shared/repository.service";
import { Router } from '@angular/router'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userFormLogin: FormGroup;
  public errorMes: string;

  constructor(private http: RepositoryService, private router: Router) { }

  ngOnInit() {
    this.userFormLogin = new FormGroup({
      userEmail: new FormControl("", [ Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
      userPassword: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(10)])

    });
  }

  onSubmit():void {
    let url: string = 'api/user/login';
    let body  = this.userFormLogin.getRawValue();
    this.http.create(url, body).subscribe((res:any) => {
      console.log('login');
      console.log(res, 'resssssssssssssss')

      if(res.token){
        localStorage.setItem('userInfo', JSON.stringify(res));
    }
      if(res.role==="user"){
      this.router.navigate(['home']);
    } else this.router.navigate(['admin']);

  }, error => console.log(error, 'login error'));

  }

}
