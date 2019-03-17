import { Component, OnInit, Input } from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {GrillService} from '../../services/grill.service';
import {Reservationmodel} from '../../models/reservation.model';
import {Router} from "@angular/router";
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import * as $AB from 'jquery';
import * as jQuery from 'jquery';
import * as bootstrap from 'bootstrap';
declare var $:any;

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  reservation:Reservationmodel = new Reservationmodel();
  grillList:any;
  hour_start:any = '00:00';
  hour_end:any = '00:00';
  mensaje:boolean;
  closeResult: string;
  titleModal:string = ''
  messajeModal:string = '';

  constructor(private book:BookingService, private router:Router,private grill:GrillService) {

    grill.obtainGrillList().subscribe(data =>{
      this.grillList = data;

    })
    
   }

  ngOnInit() {
  }

  public makeReservation() {
    this.reservation.hour_start = this.hour_start;
    this.reservation.hour_end = this.hour_end;
  	this.book.makeReservation(this.reservation).subscribe(success => {
      console.log('HOLA2');
  		if (success) {
        if(success.error){
          if(success.error.non_field_errors[0] == 'The grill already reservated for that date and that specific hour'){
            this.titleModal = 'Error';
            this.messajeModal = 'La barbacoa ya se encuentra reservada en este horario. Por favor intenta en otro horario u otra barbacoa'
            $("#exampleModal").modal('toggle');

          }
          else{
            this.titleModal = 'Error';
            this.messajeModal = 'Ha ocurrido un error'
            $("#exampleModal").modal('toggle');
          }
        } 
        else{
          this.titleModal = 'Reservado!';
            this.messajeModal = 'Has reservado correctamente la barbacoa para ese horario'
          $("#exampleModal").modal('toggle');
        }

        
  		} else {
  		}
  	}, 
  		error => {
  			console.log("Error", error);
  		});
  }

}
