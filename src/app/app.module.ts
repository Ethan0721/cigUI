import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { ClientsComponent } from './page-views/clients/clients.component';
import { AppRoutingModule } from './app-routing.module';
import { TableModule} from 'primeng/table';
import { SplitButtonModule} from 'primeng/splitbutton';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OrdersComponent } from './page-views/orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { CigDropdownComponent } from './components/cig-dropdown/cig-dropdown.component';
import { PageViewsComponent } from './page-views/page-views.component';
import { CigrattesComponent } from './page-views/cigrattes/cigrattes.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ToastModule} from 'primeng/toast';
import { RouterModule, Routes } from '@angular/router';
import {TreeTableModule} from 'primeng/treetable';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { CigModalComponent } from './components/cig-modal/cig-modal.component';
import {DialogModule} from 'primeng/dialog';
import { CigTextComponent } from './components/cig-text/cig-text.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AutoCompleteModule} from 'primeng/autocomplete';

const appRoutes: Routes = [
  {
    path: '', component: PageViewsComponent
  },
  {
    path: 'client',
    children:[
      {
        path: '', component: ClientsComponent
      },
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    OrdersComponent,
    CigDropdownComponent,
    PageViewsComponent,
    CigrattesComponent,
    CigModalComponent,
    CigTextComponent,
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
    VirtualScrollerModule,
    RadioButtonModule,
    ToastModule,
    TreeTableModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    DialogModule,
    CalendarModule,
    [RouterModule.forRoot(appRoutes)],
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
