import { Injectable } from '@angular/core';
import {BaseService} from '../../app/app.base.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {Grillmodel} from '../models/grill.model';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class GrillService extends BaseService{

  static readonly GRILL_ENDPOINT = 'grill/';
  optionsHttp:any = {
    withCredentials: true,
    headers: null,
	}
  constructor(http: HttpClient, private auth:AuthService) { 
    super(http)
  }

  public createGrill(grill:Grillmodel) : Observable<Object> {
    console.log('El token es:');
    console.log(this.auth.token)
    this.optionsHttp.headers = new HttpHeaders().set('Authorization', this.auth.token);
  		return Observable.create(observer => {
  			// Petición a backend
  			this.addBase(grill,GrillService.GRILL_ENDPOINT,this.optionsHttp)
        .subscribe( data => {
          if (data) {
						
						console.log(data);
						observer.next(data);
						observer.complete(true);
          } else {
						observer.next(false);
          }
				}, err => console.error(err))
				
			});
  	}
}
