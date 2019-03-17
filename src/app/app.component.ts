import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GrillBooking';

  constructor(private auth:AuthService){
    if (localStorage.getItem('tokenUser')){
      this.auth.token = localStorage.getItem('tokenUser');
    }
  }
  
}

