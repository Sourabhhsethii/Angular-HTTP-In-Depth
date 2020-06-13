import { AccoutService } from './account.service';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Http-In-Depth';
  accounts = null;
  message = '';
  response: any;
  constructor(private accoutService: AccoutService){

  }

  fetchAccount(){
    this.accoutService.fetchAccount()
   .subscribe((data) => {
    this.accounts = data;
    this.message = '';
   }
   );
  }

  sendDetails(){
    this.accounts = this.accoutService.sendAccountDetails()
    .subscribe((data) => {
      console.log(data);
      this.response = data;
      this.accounts = data.body;
      this.message = '';
     }
     );
  }

  sendDetailsQueryParams(){
    this.accounts = this.accoutService.sendAccountDetailsQueryParams()
    .subscribe((data) => {
      this.accounts = data;
      this.message = '';
     }
     );
  }

  sendDetailsPostParams(){
    this.accounts = this.accoutService.sendAccountDetailsPostParamsHandled()
    .subscribe((data) => {
      this.accounts = data;
     },
     (error: HttpErrorResponse) => {

      if (error instanceof Error){
        this.message = `An error Occured ${error.error.message}`;

      } else {
        this.message = `Backend Returend Error code ${error.status}, body was : ${error.message}`;
      }

     }
     );
  }
}
