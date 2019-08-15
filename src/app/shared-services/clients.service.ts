import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/data.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private readonly baseUrl = 'https://thawing-brook-46832.herokuapp.com';
  private readonly localhost = 'http://localhost:3030';
  private readonly clientURL = '/cig/users';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  // private readonly baseUrl = 'http://localhost:3030';

  constructor(private http: HttpClient) { }

  public getClientInfo(): Observable<any>{
    let url = this.baseUrl + this.clientURL; 
    return this.http.get(url);
  }
  public getClientIdInfo(id:string): Observable<any>{
    let url = this.baseUrl + this.clientURL + `/${id}`; 
    return this.http.get(url);
  }
  
  public updateClientInfo(){

  }
  public createClientInfo(client: Client){
    let url = this.baseUrl + this.clientURL + '/add'; 
    // let url = this.localhost + this.clientURL + '/add'; 
    return this.http.post(url, client).subscribe( data => {
      console.log("POST Request is successful ", data);
    },
    error=>{
      console.log("ERROR ", error );
    });
  }
}
