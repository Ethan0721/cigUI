import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DropDownItem } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // private viewCode = new BehaviorSubject('');
  // currentViewCode = this.viewCode.asObservable();

  constructor() { 

  }

  // changeViewCode(code: DropDownItem) {
  //   this.viewCode.next(code.value);
  // }
}
