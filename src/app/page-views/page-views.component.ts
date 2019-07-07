import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {DataService} from '../shared-services/data.service';
import {DropDownItem} from '../models/data.model';
import {CustomDropdownComponent} from '../custom-tools/custom-dropdown/custom-dropdown.component';

@Component({
  selector: 'app-page-views',
  templateUrl: './page-views.component.html',
  styleUrls: ['./page-views.component.less']
})
export class PageViewsComponent implements OnInit {

  viewCode: string = 'CLIENT';
  viewValue: string;
  dropDownList : DropDownItem[] = [
    {id: 1, value:"Client List", code:"CLIENT"},
    {id: 2, value:"Order List", code:"ORDER"},
    {id: 3, value:"Cig List", code:"CIG"}
  ];
  selectedValue : DropDownItem = this.dropDownList[0];
  // @ViewChild(CustomDropdownComponent, {static: false}) child;

  constructor(private data: DataService) { 
  }
  
  ngOnInit() {
    //this.data.currentViewCode.subscribe(viewCode => this.viewCode = viewCode);
  }
  // ngAfterViewInit() {
  //   this.selectedValue = this.child.selectedValue;
  // }
  receiveDropDownEvent($event) {
    this.selectedValue = $event
    this.viewCode = this.selectedValue.code;
    console.log(this.viewCode);
    this.viewValue = this.selectedValue.value;
  }
}
