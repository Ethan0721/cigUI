import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class CountriesResolver implements Resolve<any> {
  constructor(private httpClient: HttpClient){}

  resolve(route: ActivatedRouteSnapshot){
    return this.httpClient.get<any[]>('app/assets/data/countries.json')
  }
}


