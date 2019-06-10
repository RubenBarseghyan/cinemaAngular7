import { Component, OnInit, Inject, ViewEncapsulation, AfterViewInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {
  public  thNumber: number [] =[];
  public rowNumber: number [] =[];
  public  reserveGroup: FormGroup;
  public description: string;
  public theRow: number;
  public theSeat: number;
//style binding
public clickedId: string = "";
public reserveded = ['11', '22', '45', '44', '42'];

  constructor(
    private matDialogRef: MatDialogRef<HallComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) {
       this.description = data.description//sign the value to which pass with open the dialog to discription variable
      }


  ngOnInit() {

    this.thNumber.length = 5;
    this.rowNumber.length = 10;
    this.reserveGroup = new FormGroup({
      row: new FormControl('55'),
      seat:new FormControl('77')
    });

  }

  ngAfterViewInit(){
    for(let i = 0; i<this.reserveded.length;i++){
      document.getElementById(this.reserveded[i]).style.background= 'yellow';
    }
  }


  save() {
        this.matDialogRef.close(this.reserveGroup.value);
    }

  close() {
         this.matDialogRef.close();
     }

   detectSeat(a, b, e){
    console.log(this.theRow = a, this.theSeat = b);
    this.clickedId = e.path[0].id;
    // document.getElementById(this.clickedId).style.background = 'red';
    }
}
