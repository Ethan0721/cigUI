import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {SelectItem} from 'primeng/api';
import {DataService} from '../../shared-services/data.service';
import { DropDownItem} from '../../models/data.model';

@Component({
  selector: 'app-cig-dropdown',
  templateUrl: './cig-dropdown.component.html',
  styleUrls: ['./cig-dropdown.component.less']
})

export class CigDropdownComponent implements OnInit {
  // viewCode: string;
  @Input() dropDownList : DropDownItem[];
  @Input() selectedValue : DropDownItem;
  @Output() dropDownEvent = new EventEmitter<DropDownItem>();
  
  constructor(private data : DataService) {
    
 }

  ngOnInit() {
    // this.data.currentViewCode.subscribe(viewCode => this.viewCode = viewCode)
  }
  public dataChanged(){

  }
  sendDropDownEvent(){
    console.log('send Event', this.selectedValue.value);
    this.dropDownEvent.emit(this.selectedValue);
  }
  // newViewCode(){
  //   this.data.changeViewCode(this.selectedValue);
  // }
  
 
}
