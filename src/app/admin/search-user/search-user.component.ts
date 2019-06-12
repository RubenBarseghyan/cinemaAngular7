import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../shared/repository.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  public inputValue: string = "";
  public userNamesArray:any = null;

  //table data
  public theColumns = [
      {prop: '_id' },
      { name: 'userName' },
      { name: 'userEmail' },
      { name: 'role'}
    ];
  public theUrl: string = "api/user/allusersnofilter";
  constructor(private http:RepositoryService) { }

  ngOnInit() {

  }

    onKey(e){
      if(this.inputValue.length >2){
        this.http.create("api/user/allusers", {data: this.inputValue})//when put we must send object!!!!
          .subscribe((res) => {
          this.userNamesArray = res.data;
            console.log(this.userNamesArray, 'namesssss');
          }, (err) => {
            console.log(err);
          });
      }
    }

    takeValau(e){
      console.log(e.target.outerText);
      this.inputValue = e.target.outerText;
      console.log(e)
      this.userNamesArray = null;
    }
}
