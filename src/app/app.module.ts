import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { AjoutVirementComponent } from './compenents/ajout-virement/ajout-virement.component';
import { RecuperatifDuVirementComponent } from './compenents/ajout-virement/recuperatif-du-virement/recuperatif-du-virement.component';
import { FinDeVirementComponent } from './compenents/ajout-virement/recuperatif-du-virement/fin-de-virement/fin-de-virement/fin-de-virement.component';
import { LoginComponent } from './compenents/login/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { ApiRestService } from './api-rest.service';


@NgModule({
  declarations: [
    AppComponent,
    RecuperatifDuVirementComponent,
    AjoutVirementComponent,
    FinDeVirementComponent,
    LoginComponent,
    HomepageComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ApiRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
