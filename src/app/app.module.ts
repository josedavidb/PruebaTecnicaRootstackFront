import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';

import {RegisterComponentModule} from './pages/register/register.module';
import {LoginComponentModule} from './pages/login/login.module';
import {CreateGrillComponentModule} from './pages/create-grill/create-grill.module';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponentModule } from './pages/reservation/reservation.module';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterComponentModule,
    LoginComponentModule,
    CreateGrillComponentModule,
    HttpClientModule,
    ReservationComponentModule,
    AmazingTimePickerModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
