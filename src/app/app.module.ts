import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClientsComponent } from './page-views/clients/clients.component';
import { AppRoutingModule } from './app-routing.module';
import {TableModule} from 'primeng/table';
import {SplitButtonModule} from 'primeng/splitbutton';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OrdersComponent } from './page-views/orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomDropdownComponent } from './custom-tools/custom-dropdown/custom-dropdown.component';
import { PageViewsComponent } from './page-views/page-views.component';
import { CigrattesComponent } from './page-views/cigrattes/cigrattes.component';
import { CustomToolsComponent } from './custom-tools/custom-tools.component';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    OrdersComponent,
    CustomDropdownComponent,
    PageViewsComponent,
    CigrattesComponent,
    CustomToolsComponent,
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    SplitButtonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    VirtualScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
