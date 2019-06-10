import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {ViewChild, TemplateRef} from '@angular/core';
import { RepositoryService } from '../../shared/repository.service';

import { DomSanitizer } from '@angular/platform-browser';
import { MovieId } from '../../classes/movieId';
import { MovieInfo } from '../../classes/movieInfo';

//ngx smart ngxpopup
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NgxsmatdialogComponent} from '../ngxsmatdialog/ngxsmatdialog.component';



@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})

export class DatatableComponent implements OnInit {
  public rows = [];
  public temp = [];
  public data = [];
  @Input() columns;
  @Input() url: string;

  public movieInfoList: MovieInfo[]= [];
  public movieIdList: MovieId[] = [];

  //variable for ngxpopup


  constructor(
    private http:RepositoryService,
    private sanitizer: DomSanitizer,
    public ngxSmartModalService: NgxSmartModalService) {
   }

  ngOnInit() {
    this.http.getData(this.url).subscribe((res: any) => {
      if(typeof res ==="object" && res.constructor === Object){
        this.movieInfoList = res.data.movieList;
        this.movieInfoList.forEach((e)=>this.movieIdList.push(e.movieId))
        this.data = this.movieIdList;
      } else {
        this.data = res;
      }
      this.temp =this.data;
      this.rows = this.data;


    }, error => console.log(error, 'error when try get moviesList'));

  }

  ngAfterViewInit(){
    this.getModalAndRemoveData();
    }

    getModalAndRemoveData(){
      this.ngxSmartModalService.getModal('myModal').onOpen.subscribe((modal: NgxsmatdialogComponent) => {
        // console.log('Rickroll modal opened!', modal);
        this.ngxSmartModalService.getModal('myModal').removeData();
        });
    }


    updateFilter(event) {
      const val = event.target.value.toLowerCase();
      // filter our data
      if(this.temp[0].hasOwnProperty('name')){
      var temp = this.temp.filter(function(d) {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val
      });
      } else {
         var temp = this.temp.filter(function(d) {
          return d.userName.toLowerCase().indexOf(val) !== -1 || !val
          || d.userEmail.toLowerCase().indexOf(val) !== -1
          ||d.role.toLowerCase().indexOf(val) !== -1
        });
      }
      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      // this.table.offset = 0;
    }

    getElementIdForUpdate(e){
      let theExact = this.data.find((elem)=>{
          return elem._id ===e
        });
      console.log(theExact,'this elemeeeeeent');
      this.ngxSmartModalService.setModalData(theExact, 'myModal');
    }



    slideClick(e){
        console.log(e)
    }
}
