import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";
import {HeaderComponent} from '../../shared/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = { password: '', username: ''};
  loginSuccess = false;

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
  }

  public login() {
  	this.auth.login(this.credentials).subscribe(success => {
  		if (success) {
        this.loginSuccess = true;
        this.router.navigate(['/crear-grill'])
  		} else {
  		}
  	}, 
  		error => {
  			console.log("Error", error);
  		});
  }
}
