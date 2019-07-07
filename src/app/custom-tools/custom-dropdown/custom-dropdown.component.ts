import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {SelectItem} from 'primeng/api';
import {DataService} from '../../shared-services/data.service';
import { DropDownItem} from '../../models/data.model';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.less']
})

export class CustomDropdownComponent implements OnInit {
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
