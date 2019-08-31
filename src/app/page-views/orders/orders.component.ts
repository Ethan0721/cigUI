import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../shared-services/orders.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Order } from '../../models/data.model';
// import { orderDetail } from '../../models/data.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {

  public orderHistroy: Order[];
  cols : any[];
  public displayCreateModal : boolean = false;
  constructor(private orderService : OrdersService) {}

  ngOnInit() {
    this.cols = [
      { field: 'date', header: 'Order Date' },
      { field: 'detail', header: 'Order Detail' },
      { field: 'income', header: 'Income' },      
      { field: 'user', header: 'User' },      
      { field: 'quantity', header: 'Total Quantity' },
      { field: 'edit', header: 'Edit'}
    ];
    this.orderService.getOrders()
    .pipe(untilDestroyed(this))
    .subscribe((res : any) => {
      this.orderHistroy = _.sortBy(res.data, [
        function(o) { return o.orderDate; }
      ]).reverse();
      _.map(this.orderHistroy, function(orders){
        let str = '';
        _.map(orders.detail, function(order){
          str = str + order.count + ' ' + order.name + ', ';
        })
        str = str.substring(0,str.length-2);
        orders['info'] = str;
      })
      // console.log(this.orderHistroy);
    })
  }
  public openInsertOrderModal(){
    console.log("Insert Order");
    this.displayCreateModal = true;
  } 
  public editOrder(wechatId: string){
    console.log("wechatId: ", wechatId);
  }
  public addOrder(form){
    const orderForm = form.form.value;
    console.log("orderForm : ", orderForm);
    this.orderService.addOrders(orderForm);

  }
  public closeInsertOrderModal(){
    this.displayCreateModal = false;
  }
  public copyMessage(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  ngOnDestroy(){}

}
