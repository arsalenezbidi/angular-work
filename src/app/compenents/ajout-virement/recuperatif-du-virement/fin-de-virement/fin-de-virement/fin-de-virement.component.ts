import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fin-de-virement',
  templateUrl: './fin-de-virement.component.html',
  styleUrls: ['./fin-de-virement.component.css']
})
export class FinDeVirementComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  Returne(){
  this.router.navigate(['/recuperatif-virement']) 
}


}
