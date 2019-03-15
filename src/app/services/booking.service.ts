import { Injectable } from '@angular/core';
import {BaseService} from '../../app/app.base.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {Reservationmodel} from '../models/reservation.model';


@Injectable({
  providedIn: 'root'
})
export class BookingService extends BaseService{

  static readonly BOOKING_ENDPOINT = 'booking/';
  optionsHttp:Object = {
		withCredentials: true,
	}
  constructor(http: HttpClient) { 
    super(http)
  }

    public makeReservation(reservation:Reservationmodel) : Observable<Object> {
  	    return Observable.create(observer => {
  		    // Petición a backend
  	        this.addBase(reservation,BookingService.BOOKING_ENDPOINT,this.optionsHttp)
        .subscribe( data => {
        if (data) {			
	        console.log(data);
		    observer.next(data);
		    observer.complete(true);
        }else{
		    observer.next(false);
        }
	    }, err => console.error(err))
			
	    });
    }
}
