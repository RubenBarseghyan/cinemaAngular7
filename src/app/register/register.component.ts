import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from "../classes/user";
import { RepositoryService } from "../shared/repository.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private userFormRegister: FormGroup;

  constructor(private http: RepositoryService, private router: Router) { }

  ngOnInit() {
    this.userFormRegister = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      userEmail: new FormControl("", [ Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
      userPassword: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern("")]),
      userPasswordConfirm: new FormControl("", Validators.required)
    });
  }

  onSubmit(): void {
    let url = 'api/user/register';
    let body = this.userFormRegister.getRawValue();
    this.http.create(url, body).subscribe((res:any) => {
      console.log('registration complete');
      if(res.token){
      localStorage.setItem('userInfo', JSON.stringify(res));
      this.userFormRegister.reset();
      this.router.navigate(['home']);
    }
  }, error => console.log('registrtion error'));
  }

}
