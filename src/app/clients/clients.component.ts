import { Component, OnInit } from '@angular/core';
import { Client } from '../models/clients.model';
import { ClientsService } from '../shared-services/clients.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {
  private orderDetailFlag = false;
  private dropDownListFlag = false;
  private orderDetail = [];
  public items: any;
  public clients : Client[];
  public selectedClient : any;
  // public clients : Client[] = [
  //   {
  //   wechatId : "szjjaykimi",
  //   name : "",
  //   address : [ 
  //       "EVO"
  //   ],
  //   university : null,
  //   createdDate : 1558405540.0,
  //   orderHistory : [ 
  //       {
  //           income : 120,
  //           totalQuantity : 2,
  //           orderDate : 1558405540,
  //           detail : [ 
  //               {
  //                   "country" : "Japan",
  //                   "number" : 2,
  //                   "name" : "日本蓝莓爆珠"
  //               }
  //           ]
  //       }
  //   ],
  //     friends : null,
  //     gender : "M",
  //     status : "ACTIVE"
  //   },
  //   {
  //     wechatId : "ccc",
  //     name : "bbb",
  //     address : [ 
  //         "EVO"
  //     ],
  //     university : 'Temple',
  //     createdDate : 1558405540.0,
  //     orderHistory : [ 
  //         {
  //             income : 120,
  //             totalQuantity : 2,
  //             orderDate : 1558405540,
  //             detail : [ 
  //                 {
  //                     "country" : "Japan",
  //                     "number" : 2,
  //                     "name" : "日本蓝莓爆珠"
  //                 }
  //             ]
  //         }
  //     ],
  //       friends : null,
  //       gender : "M",
  //       status : "ACTIVE"
  //     },
  //     {
  //       wechatId : "szjjaykimi",
  //       name : "",
  //       address : [ 
  //           "EVO"
  //       ],
  //       university : null,
  //       createdDate : 1558405540.0,
  //       orderHistory : [ 
  //           {
  //               income : 120,
  //               totalQuantity : 2,
  //               orderDate : 1558405540,
  //               detail : [ 
  //                   {
  //                       "country" : "Japan",
  //                       "number" : 2,
  //                       "name" : "日本蓝莓爆珠"
  //                   }
  //               ]
  //           }
  //       ],
  //         friends : null,
  //         gender : "M",
  //         status : "ACTIVE"
  //       }
  // ];
  constructor(private clientsService : ClientsService) { }

  ngOnInit() {
    this.clientsService.getClientInfo()
    .pipe(untilDestroyed(this))
    .subscribe((res) => {
      this.clients = res.data;
      console.log(this.clients);
    })
    this.items = [
      // {label: 'Update', icon: 'pi pi-refresh', command: () => {
      //     this.update();
      // }},
      // {label: 'Delete', icon: 'pi pi-times', command: () => {
      //     this.delete();
      // }},
      {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  ];
  }
  public openOrderDetail(id: string){
    console.info('open order details');
    this.clientsService.getClientIdInfo(id)
    .pipe(untilDestroyed(this))
    .subscribe((res)=>{
      if(res.data){
        this.orderDetail = res.data;
        console.log('order id '+ id);
        console.log('order details ', this.orderDetail);
      }
    })
    this.orderDetailFlag = !this.orderDetailFlag;
  }
  public openDropDownList(){
    this.dropDownListFlag = !this.dropDownListFlag;
  }
  ngOnDestroy() {}
}
