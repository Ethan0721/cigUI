import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CigsService {
  private readonly baseUrl = 'https://thawing-brook-46832.herokuapp.com';
  
  constructor(private http: HttpClient) { }
  
  public getCigs(){
    const cigUrl = '/cig';
    let url = this.baseUrl + cigUrl; 
    return this.http.get(url);
  }
  

}
