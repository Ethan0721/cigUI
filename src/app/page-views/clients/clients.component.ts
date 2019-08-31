import { Component, OnInit } from '@angular/core';
import { Client, Order, OrderDetail, Cig, DropDownItem } from '../../models/data.model';
import { ClientsService } from '../../shared-services/clients.service';
import { CigsService } from '../../shared-services/cigs.service';
import { DialogService } from 'primeng/api';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import {CigModalComponent} from '../../components/cig-modal/cig-modal.component';
import { filter } from 'minimatch';
import { from } from 'rxjs';

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
  public filteredClientsMultiple: Client[];
  public selectedClient: Client = null;
  private selectedClientOrderHistory: Order[];
  // private universityList = ["Drexel","Temple","Upenn","Null"];
  // private favourites: any;
  private clientAction = "CLIENT_LIST";
  private expanded: boolean = false;
  public displayEditModal : boolean = false;
  public displayCreateModal : boolean = false;
  public university: string = "Empty";
  public orderList : Order[] = [];

  // public universityDropDownList : DropDownItem[] = [
  //   {id: 1, value:"Drexel", code:"DREXEL"},
  //   {id: 2, value:"Temple", code:"TEMPLE"},
  //   {id: 3, value:"Upenn", code:"UPENN"}
  // ];
  constructor(
    private clientsService: ClientsService,
    private router: Router,
    public dialogService: DialogService,
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

  public filterClientMultiple(event) {
    let query = event.query;
    this.filteredClientsMultiple = this.filterCountry(query, this.clients);
  }
  public initialClients(clients: Client[]) {
    const TOP_FAVOURITES = 2;
    let self = this;
    this.clients = _.forEach(clients, function (client) {
      if(client.orderHistory){
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
        let limitFavourite = favourites.slice(0, TOP_FAVOURITES);
        client['favourites'] = limitFavourite;
        client['totalBought'] = totalBought;
      }
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
    return result;
  }
  
  public filterCountry(query, clients: Client[]):any[] {
    let filtered : Client[] = [];
    for(let i = 0; i < clients.length; i++) {
        let client = clients[i];
        if(client.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(client);
        }
    }
    return filtered;
}

  public openDropDownList() {
    this.dropDownListFlag = !this.dropDownListFlag;
  }
  public expandRow(wechatId: string) {    
    this.selectedClient = this.findSelectedClient(wechatId);
    console.log('this.selectedClient : ', this.selectedClient);
    console.log('Wecaht ID: ', wechatId);
    // if(this.selectedClient.orderHistory){
    //   this.selectedClientOrderHistory =
    //   _.sortBy(this.selectedClient.orderHistory, function(orders){
    //     return orders.orderDate;
    //   }).reverse();
    // }    
    this.expanded = !this.expanded;
  }
  public findSelectedClient(wechatId: string) {
    return _.find(this.clients, function (client) {
      return client.wechatId === wechatId;
    });
  }
  public switchPage(value: string, wechatId: string) {
    console.log("value :", value + "wechatId: ", wechatId);
    this.selectedClient = this.findSelectedClient(wechatId);
    console.log("this.selectedClient: ", this.selectedClient);
    if(this.selectedClient && value === 'EDIT_DETAIL'){
      this.university = this.selectedClient.university ? this.selectedClient.university : "Empty";
      this.openEditModal();
    }
    // if(this.clientAction === value){
    // }
    // else{
    //   this.clientAction = value;
    // }    
  }
  public openEditModal() {
    this.displayEditModal = true;
  }
  public openCreateModal(){
    console.log('Create A User');
    this.displayCreateModal = true;
  }
  
  public closeCreateModal(form){
    form.reset();
    this.displayCreateModal = false;
  }
  public closeEditModal(form){
    // form.reset();
    this.displayEditModal = false;
  }

  public createSubmit(form){
    let client : Client = form.value;
    this.clientsService.createClientInfo(client);    
    console.log("Submited: ", client);
    this.closeCreateModal;
  }

  public editSubmit(form) {
    // this.value = form; 
    console.log(form);
  }

  public addOrder(){
    console.log("Added Order");
  }
  ngOnDestroy() { }
}
