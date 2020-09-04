import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperatif-du-virement',
  templateUrl: './recuperatif-du-virement.component.html',
  styleUrls: ['./recuperatif-du-virement.component.css']
})
export class RecuperatifDuVirementComponent implements OnInit {

  constructor(
   public router:Router
  ) { }

  ngOnInit(): void {
  }
  nextpage(){
    this.router.navigate(['/fin-de-virement'])
   }
  
  back(){
    this.router.navigate(['/ajout-virement'])
  }

}
