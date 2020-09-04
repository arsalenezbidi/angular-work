import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiRestService} from '../../../api-rest.service'
import { Client } from 'src/app/shared/client';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  client=new Client ;

  
  constructor(
    public restApi: ApiRestService, 
    public router: Router
  ) { }


  ngOnInit(): void {
  this.restApi.getToken();
  }

  login ()
  {this.restApi.login(this.client).subscribe((data: {
      
  }) => {
    this.router.navigate(['/ajout-virement'])
  })

   
  }
}
