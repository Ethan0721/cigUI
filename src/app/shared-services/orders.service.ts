import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly baseUrl = 'http://localhost:3030';
  constructor(private http: HttpClient) { }

  getOrders(){
    const orderUrl = '/cig/usersorder';
    let url = this.baseUrl + orderUrl; 
    return this.http.get(url);
  }
  
}
