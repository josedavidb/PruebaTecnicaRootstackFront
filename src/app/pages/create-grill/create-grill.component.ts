import { Component, OnInit } from '@angular/core';
import {Grillmodel} from '../../models/grill.model';
import {GrillService} from '../../services/grill.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-create-grill',
  templateUrl: './create-grill.component.html',
  styleUrls: ['./create-grill.component.scss']
})
export class CreateGrillComponent implements OnInit {

  newGrill:Grillmodel = new Grillmodel();

  constructor(private grillService:GrillService,private router: Router) { }

  ngOnInit() {
  }

  public createGrill() {
  	this.grillService.createGrill(this.newGrill).subscribe(success => {
  		if (success) {
        console.log(success)
        this.router.navigate(['/reservacion'])
  		} else {
  		}
  	}, 
  		error => {
  			console.log("Error", error);
  		});
  }
}
