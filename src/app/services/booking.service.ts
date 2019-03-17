import { Injectable } from '@angular/core';
import {BaseService} from '../../app/app.base.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {Reservationmodel} from '../models/reservation.model';
import {AuthService} from './auth.service';

// operators
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"
import "rxjs/add/operator/map"



@Injectable({
  providedIn: 'root'
})
export class BookingService extends BaseService{

  static readonly BOOKING_ENDPOINT = 'booking/';

  optionsHttp:any = {
    withCredentials: true,
    headers: null,
	}
  constructor(http: HttpClient, private auth:AuthService) { 
    super(http)
  }

    public makeReservation(reservation:Reservationmodel) {
      this.optionsHttp.headers = new HttpHeaders().set('Authorization', this.auth.token);

  	    return this.addBase(reservation,BookingService.BOOKING_ENDPOINT,this.optionsHttp)
        .catch(error => { 
          return this.handleError1(error);
        });
  		    // Petición a backend


    }

    private handleError1(error: any) { 
      console.log('AJAA');
      let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      return Observable.throw(error);
    }
}
