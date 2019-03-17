import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router"



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  linksMenuNotLogged = [
    {
      name: "Acerca de nosotros",
      router: '#',
      click: '',

    },
    {
      name: "Servicios",
      router: '#',
      click: '',

    },
    {
      name: "Contacto",
      router: '#',
      click: '',

    },
    {
      name: "Registrate",
      router: 'registro',
      click: '',

    },
    {
      name: "Ingresa",
      router: 'login',
      click: '',

    },
  ]

  linksMenuLogged = [
    {
      name: "Acerca de nosotros",
      router: '#',
      click: '',

    },
    {
      name: "Crear Barbacoa",
      router: 'crear-grill',
      click: '',

    },
    {
      name: "Reservar",
      router: 'reservacion',
      click: '',
    },

  ]

  isLoggedIn:boolean;
  constructor(public auth:AuthService,private router: Router) {
    if(localStorage.getItem('tokenUser')){
      this.auth.isLogged = true
    }
    else {
      this.auth.isLogged= false;
    }
   }

  ngOnInit() {
    
  }

  public logout(){
    this.auth.logout();
    this.auth.isLogged = false;
    this.router.navigate(['/'])
  }

}
