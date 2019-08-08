import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../shared-services/orders.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { OrderHistory } from '../../models/data.model';
// import { orderDetail } from '../../models/data.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {

  public orderHistroy: OrderHistory[];
  cols : any[];
  constructor(private orderService : OrdersService) {}

  ngOnInit() {
    this.cols = [
      { field: 'date', header: 'Order Date' },
      { field: 'detail', header: 'Order Detail' },
      { field: 'income', header: 'Income' },      
      { field: 'user', header: 'User' },      
      { field: 'quantity', header: 'Total Quantity' },
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
  ngOnDestroy(){}

}
