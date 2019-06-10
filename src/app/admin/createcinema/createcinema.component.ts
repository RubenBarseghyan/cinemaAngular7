import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../../shared/repository.service';
import { Router } from '@angular/router';
import { Cinema } from "../../interfaces/cinema";

@Component({
  selector: 'app-createcinema',
  templateUrl: './createcinema.component.html',
  styleUrls: ['./createcinema.component.scss']
})
export class CreatecinemaComponent implements OnInit {

  private createCinemaForm: FormGroup;
  private cinemaBuldings: Cinema[]=[];


  constructor( private httpService: RepositoryService, router: Router) { }

  ngOnInit() {
    // this.addMovieToCinema();
    this.createCinemaForm = new FormGroup({
      name: new FormControl( "",[Validators.required, Validators.minLength(1)]),
      address: new FormControl("",  [Validators.required, Validators.minLength(1)]),
      image: new  FormControl("",  [Validators.required, Validators.minLength(1)])
    });
  }

  onSubmit = ()=>{
  this.httpService.create('api/cinemas', this.createCinemaForm.getRawValue()).subscribe((res: any) =>{
    console.log(res, 'cinema was created');
    this.createCinemaForm.reset();
  }, error => console.log(error));
}

}
