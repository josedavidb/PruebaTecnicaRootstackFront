import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import {LoginComponent} from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {ReservationComponent} from './pages/reservation/reservation.component';
import {CreateGrillComponent} from './pages/create-grill/create-grill.component';

const routes: Routes = [
  {path: '',component:IndexComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:RegisterComponent},
  {path: 'reservacion', component: ReservationComponent},
  {path: 'crear-grill', component:CreateGrillComponent},
  {path: '**',pathMatch:'full', redirectTo:''},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
