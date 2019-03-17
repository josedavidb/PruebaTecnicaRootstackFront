import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {ReservationComponent} from './reservation.component';
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [
        ReservationComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
    ],
    entryComponents: [
    ],
    providers: [
    ],
  })
  export class ReservationComponentModule {}