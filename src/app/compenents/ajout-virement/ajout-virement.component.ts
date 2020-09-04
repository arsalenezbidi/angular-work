import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ajout-virement',
  templateUrl: './ajout-virement.component.html',
  styleUrls: ['./ajout-virement.component.css']
})
export class AjoutVirementComponent implements OnInit {

  constructor( public router: Router) {
     
   }

  ngOnInit(): void {
  }
 nextpage(){
  this.router.navigate(['/recuperatif-virement'])
 }
}
