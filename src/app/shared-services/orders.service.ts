import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly baseUrl = 'https://thawing-brook-46832.herokuapp.com';
  constructor(private http: HttpClient) { }

  getOrders(){
    const orderUrl = '/cig/usersorder';
    let url = this.baseUrl + orderUrl; 
    return this.http.get(url);
  }
  
}
