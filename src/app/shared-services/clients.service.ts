import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private readonly baseUrl = 'https://thawing-brook-46832.herokuapp.com';
  // private readonly baseUrl = 'http://localhost:3030';

  constructor(private http: HttpClient) { }

  public getClientInfo(): Observable<any>{
    const clientUrl = '/cig/users';
    let url = this.baseUrl + clientUrl; 
    return this.http.get(url);
  }
  public getClientIdInfo(id:string): Observable<any>{
    const clientUrl = '/cig/users'+`/${id}`;
    let url = this.baseUrl + clientUrl; 
    return this.http.get(url);
  }
  
  public updateClientInfo(){

  }
  public createClientInfo(id:string){

  }
  
}
