import { Component } from '@angular/core';
import { ClientsComponent } from './page-views/clients/clients.component'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'cigUI';
}
