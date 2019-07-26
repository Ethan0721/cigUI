import { Component, OnInit } from '@angular/core';
import { Client, OrderHistory, OrderDetail, Cig } from '../../models/data.model';
import { ClientsService } from '../../shared-services/clients.service';
import { CigsService } from '../../shared-services/cigs.service';
import { DialogService } from 'primeng/api';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import {CigModalComponent} from '../../components/cig-modal/cig-modal.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less'],
  providers: [DialogService]
})
export class ClientsComponent implements OnInit {
  // private orderDetailFlag = false;
  private dropDownListFlag = false;
  public clients: Client[];
  public selectedClient: Client;
  private selectedClientOrderHistory: OrderHistory[];
  private favourites: any;
  private clientAction = "CLIENT_LIST";
  private expanded: boolean = true;
  public displayModal : boolean = false;
  public university: string = "Empty";

  constructor(
    private clientsService: ClientsService,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.clientsService.getClientInfo()
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.clients = res.data;
        this.initialClients(this.clients);
        console.log(this.clients);
      })
  }

  public initialClients(clients: Client[]) {
    let self = this;
    this.clients = _.forEach(clients, function (client) {
      let clientObj, favourites = [];
      let favouriteCigMap = new Map();
      let totalBought = 0;
      _.forEach(client.orderHistory, function (orders) {
        totalBought += orders.totalQuantity;
        clientObj = self.setupOrderInfo(orders, favouriteCigMap);
        orders['info'] = clientObj.info;
        return orders.orderDate;
      });
      favouriteCigMap = clientObj.cigMap;
      let favouritesArray = [...favouriteCigMap.entries()].sort((a,b)=>{
          return  b[1] - a[1];
      });
      _.forEach(favouritesArray, function(f){
        favourites.push(f[0]);
      });
      client['totalBought'] = totalBought;
      client['favourites'] = favourites;
      // favourites = _.sortBy(favourites, function(f){
      //   return f.value;
      // })
      // client['favourites'] = favourites;
      // console.log(favouriteCigMap);
    }).reverse();
  }
  public setupOrderInfo(orders, cigMap) {
    let str = '';
    _.map(orders.detail, function (order) {
      let orderName = order.name;
      if (cigMap.has(orderName)) {
        cigMap.set(orderName, cigMap.get(orderName) + order.count);
      } else {
        cigMap.set(orderName, order.count);
      }
      str = `${str} (${order.count})  ${orderName} ,`;
    })
    str = str.substring(0, str.length - 2);
    const result = {
      "info": str,
      "cigMap": cigMap
    }
    // console.log(str);
    // console.log(cigMap);
    return result;
  }
  // public openClientDetail(id: string){
  //   console.info('open order details');
  //   this.clientsService.getClientIdInfo(id)
  //   .pipe(untilDestroyed(this))
  //   .subscribe((res)=>{
  //     if(res.data){
  //       this.clientOrderHistory = res.data;
  //     }
  //   })
  //   this.orderDetailFlag = !this.orderDetailFlag;
  // }
  public openDropDownList() {
    this.dropDownListFlag = !this.dropDownListFlag;
  }
  public expandRow(wechatId: string) {
    this.expanded = !this.expanded;
    if (!this.expanded) {
      this.selectedClient = this.findSelectedClient(wechatId);
      this.selectedClientOrderHistory =
      _.sortBy(this.selectedClient.orderHistory, function(orders){
        return orders.orderDate;
      }).reverse();
    }
  }
  public findSelectedClient(wechatId: string) {
    return _.find(this.clients, function (client) {
      return client.wechatId === wechatId;
    });
  }
  public switchPage(value: string, wechatId: string) {
    this.selectedClient = this.findSelectedClient(wechatId);
    if (value === 'EDIT_DETAIL') {
      this.openEditModal(wechatId);
    }
    // if(this.clientAction === value){
    // }
    // else{
    //   this.clientAction = value;
    // }    
  }
  public openEditModal(wechatId: string) {
    console.log(this.selectedClient);
    this.displayModal = true;
    this.university = this.selectedClient.university ? this.selectedClient.university : "Empty"
    //console.log(this.selectedClient);
  }
  ngOnDestroy() { }
}
