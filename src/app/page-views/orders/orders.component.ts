import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../shared-services/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {

  orders : [];
  constructor(private orderService : OrdersService) { }

  ngOnInit() {

  }

}
