import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/data.model';
import { ClientsService } from '../../shared-services/clients.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
// import { CustomDropdownComponent } from '../../custom-tools/custom-dropdown/custom-dropdown.component';
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

  constructor(private clientsService : ClientsService) { }

  ngOnInit() {
    this.clientsService.getClientInfo()
    .pipe(untilDestroyed(this))
    .subscribe((res) => {
      this.clients = res.data;
      console.log(this.clients);
    })
    this.items = [
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
