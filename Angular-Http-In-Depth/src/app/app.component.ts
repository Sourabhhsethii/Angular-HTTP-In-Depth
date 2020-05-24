import { AccoutService } from './account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Http-In-Depth';
  accounts;
  constructor(private accoutService: AccoutService){

  }

  fetchAccount(){
   this.accounts = this.accoutService.fetchAccount();
  }
}
