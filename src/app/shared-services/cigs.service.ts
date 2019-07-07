import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CigsService {
  private readonly baseUrl = 'http://localhost:3030';
  
  constructor(private http: HttpClient) { }
  
  getCigs(){
    // const clientUrl = '/cig/users';
    // let url = this.baseUrl + clientUrl; 
    // return this.http.get(url);
  }

}
