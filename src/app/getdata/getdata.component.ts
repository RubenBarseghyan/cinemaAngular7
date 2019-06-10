import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Cinema } from '../interfaces/cinema';


@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss']
})
export class GetdataComponent implements OnInit, OnChanges {

  @Input() amount: number;
  @Output() amountChange = new EventEmitter();




  constructor() { }

  ngOnInit() {
    console.log(this.amount, 'someString');
  }

  ngOnChanges(){
    console.log('its child component, OnChanges')
  }

  minus(){
   this.amount -= 1;
   this.amountChange.emit(this.amount);
 }

}
