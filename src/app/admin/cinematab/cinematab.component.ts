import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { RepositoryService } from '../../shared/repository.service';
import { Cinema } from "../../interfaces/cinema";

import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-foundation/modal';
import { BsModalRef } from 'ngx-foundation/modal/bs-modal-ref.service';
import { ActivatedRoute } from "@angular/router";

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinematab',
  templateUrl: './cinematab.component.html',
  styleUrls: ['./cinematab.component.scss']
})
export class CinematabComponent implements OnInit {

  private cinemalist: Cinema[];
  private displayedColumns: string[] = ['id', 'name', 'address', 'image', 'details', 'update', 'delete'];
  private dataSource;
  public modalRef: BsModalRef;
  public elementId: string;
  public theId:string;
  public theDetails:Cinema;

  public createCinemaForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('confirmWindow') confirmWindow: TemplateRef<any>;//to see ng-template
  @ViewChild('updateCinema') updateCinema: TemplateRef<any>;//to see ng-template
  @ViewChild('detailsWindow') detailsWindow: TemplateRef<any>;//to see ng-template



  constructor(private modalService: BsModalService,
     private router: Router,
     private repoService: RepositoryService,
     private activatedRoute: ActivatedRoute)
      { }

      ngOnInit() {
        this.getAllCinemaClientSide();
      }

      public back(): void{
        this.router.navigate(['admin']);
      }

      getAllCinemaClientSide():void{
        this.repoService.getData('api/cinemas').subscribe((res: any) =>{
          this.cinemalist = res;
          this.dataSource = new MatTableDataSource<Cinema>(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
              },
         error => console.log(error, 'erorrrrrrrr Observable')
       )}

       public redirectToDetails = (id: string) => {
         this.elementId = id;
         let theCinema = this.cinemalist.filter((cinemas)=>{
             return cinemas._id===this.elementId;
         });
          this.theDetails = theCinema[0];
         console.log(this.theDetails, 'details');
         }


      public redirectToUpdate = (id: string) => {
        console.log(id);
        let url = "api/cinemas/" +id;
        this.repoService.update(url, this.createCinemaForm.getRawValue()).subscribe((res:any) => {
          // console.log(res, 'updated successfully');
        }, error => console.log(error, 'err update get'));

      }

      public redirectToDelete = (id: string) => {
        let url = "api/cinemas/" + id;
          this.repoService.delete(url).subscribe((res:any)=>{
          }, error => console.log(error));

      }

      getElementDetails(id:string){
        this.elementId = id;
        this.redirectToDetails(id);
        this.openModal(this.detailsWindow);
      }

      getElementId(id: string){
        this.elementId = id;
        this.openModal(this.confirmWindow);
      }

      getElementForUpdate(id: string){
        this.elementId = id;

        let theCinema = this.cinemalist.filter((cinemas)=>{
            return cinemas._id===this.elementId;
        });
        console.log(theCinema, 'LLLLLLLLLLLLLLLLLLLL');
        this.openModal(this.updateCinema);
        this.createCinemaForm = new FormGroup({
          name: new FormControl( theCinema[0].name,[Validators.required, Validators.minLength(1)]),
          address: new FormControl(theCinema[0].address,  [Validators.required, Validators.minLength(1)]),
          image: new  FormControl(theCinema[0].image,  [Validators.required, Validators.minLength(1)])
        });
      }

    //functions of modal open comfirm and decline

      openModal(template: TemplateRef<any>) {
          this.modalRef = this.modalService.show(template, {class: 'tiny'});

        }

        confirm(): void {
          this.redirectToDelete(this.elementId);
          this.modalRef.hide();
          this.getAllCinemaClientSide();
        }

        confirmUpdate(): void {
          this.redirectToUpdate(this.elementId);
          this.modalRef.hide();
          this.getAllCinemaClientSide();
        }

        decline(): void {

          this.modalRef.hide();

        }
        //filter from tables datasource
        public doFilter = (value: string) => {
        this.dataSource.filter = value.trim().toLocaleLowerCase();
      }

      public createCinema(): void{
        this.router.navigate(['admin/createcinema']);
      }

}
