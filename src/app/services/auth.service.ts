import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {BaseService} from '../../app/app.base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{
	
	static readonly LOGIN_ENDPOINT = 'login/';
	static readonly REGISTER_ENDPOINT = 'register/';

	access: boolean;
	key: any;
  token: string;
	optionsHttp:Object = {
		withCredentials: true,
	}
  constructor(http: HttpClient) { 
    super(http)
  }

  public login(credentials) : Observable<Object> {
  	if (credentials.email === null || credentials.password === null) {
  		return Observable.throw("Por favor, introduce tus datos");  		
  	} else {
  		return Observable.create(observer => {
  			// Petición a backend
  			this.addBase(credentials,AuthService.LOGIN_ENDPOINT,this.optionsHttp)
        .subscribe( data => {
          if (data) {
						
						console.log(data);
						this.key = data;
            this.token = 'Token ' + this.key.key;
						this.access = true;
						observer.next(data);
						observer.complete(true);
          } else {
						this.access = false;
						observer.next(false);
          }
				}, err => console.error(err))
				
			});
  	}
	}
	
	errorHandler(error: HttpErrorResponse){
		return Observable.throw(error.message || 'Server Error');
	}

  public register(credentials):Observable<any> {
  	if (credentials.email === null || credentials.password === null || credentials.username === null) {
  		return Observable.throw("Por favor, introduce tus datos");  		
  	} else {
  		// Almacenamos credenciales
  		return Observable.create(observer => {
				this.addBase(credentials,AuthService.REGISTER_ENDPOINT)
        .subscribe( data => {
          console.log(data);
        });

        observer.next(true);
        observer.complete();
  		});
  	}
  }


}

