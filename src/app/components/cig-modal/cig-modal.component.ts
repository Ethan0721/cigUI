import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {Observable} from 'rxjs/Observable';

// const SIZES: any = {
//   sm: {
//     height : 383,
//     width: 481,
//   },
//   md: {
//     height : 638,
//     width: 501,
//   },
//   lg: {
//     height : 893,
//     width: 1161,
//   }
// }

@Component({
  selector: 'app-cig-modal',
  templateUrl: './cig-modal.component.html',
  styleUrls: ['./cig-modal.component.less']
})
export class CigModalComponent implements OnInit {
  private _visible = false;
  private _alive = true;
  @Input() dismissableMask = true;
  @Input() modal = true;
  @Input() scrollable = true;
  @Input() size = null;
  @Input() height : number;
  @Input() width : number;
  @Input() title : string;
  @Input() subTitle : string;
  @Input() set visible(value: boolean){
    if(value !== this._visible){
      this._visible = value;
      this.visibleChange.emit(value);
    }
    // if(value){
    //   document.body.classList.add('modal-open');
    // }
    // else{
    //   document.body.classList.remove('modal-open');
    // }
  }
  get visible() : boolean {
    return this._visible;
  }

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();
  // close(event : any){
  //   this.visible = false;
  // }
  constructor() { }

  ngOnInit() {
    // console.log('size', this.size);
    // this.height = SIZES[this.size] ? SIZES[this.size].height : this.height;
    // this.width = SIZES[this.size] ? SIZES[this.size].width : this.width;
    // console.log('height:',this.height);
    // console.log('width:',this.width);
    // console.log('height', this.height);
    // console.log('width', this.width);
    // console.log('closeOnEscape', this.closeOnEscape);
  }

}
