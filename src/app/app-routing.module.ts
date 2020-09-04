import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './compenents/login/login/login.component';
import { AjoutVirementComponent } from './compenents/ajout-virement/ajout-virement.component';
import { RecuperatifDuVirementComponent } from './compenents/ajout-virement/recuperatif-du-virement/recuperatif-du-virement.component';
import { FinDeVirementComponent } from './compenents/ajout-virement/recuperatif-du-virement/fin-de-virement/fin-de-virement/fin-de-virement.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login', component:LoginComponent},
   { path:'ajout-virement', component:AjoutVirementComponent} , 
   { path:'recuperatif-virement', component:RecuperatifDuVirementComponent},
   { path:'fin-de-virement', component:FinDeVirementComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
