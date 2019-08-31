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
  addOrders(order){
    const wechatId = order.wechatId;
    const orderUrl = '/cig/usersorder/' + wechatId;
    let url = this.baseUrl + orderUrl; 
    // return this.http.get(url);

    return this.http.post(url, order).subscribe( data => {
      console.log("POST Request is successful ", data);
    },
    error=>{
      console.log("ERROR ", error );
    });
  }

}
