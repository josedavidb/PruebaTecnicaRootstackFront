import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  createSuccess = false;
  registerCredentials = { email: '', password: '', username: '', confirm_password: '', confirm_email: '', first_name: '', last_name: '', birthdate: '', gender: 'M', zip_code: ''};

  constructor( private auth: AuthService) { }

  ngOnInit() {
  }

  public register() {
    console.log(this.registerCredentials);
  	this.auth.register(this.registerCredentials).subscribe(success => {
  		if (success) {
  			this.createSuccess = true;
  		} else {
  		}
  	}, 
  		error => {
  			console.log("Error", error);
  		});
  }

}
