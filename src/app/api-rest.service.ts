import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Client} from '../app/shared/client';
import { retry, catchError } from 'rxjs/operators';
import { Compte } from './shared/compte';
@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  basicURL:'http://localhost:8445';
  apiURL = 'http://localhost:8445/api/client';
  TokenURL = 'http://localhost:8445/login';
  loginApiURL = 'http://localhost:8445/api/client/login';
  listCompte =  'http://localhost:8445/api/compte/comptes';
  token; 
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
      
    })
  }  


// HttpClient API post() method => Create employee
login(client): Observable<Client> {
  this.token
  return this.http.post<Client>(this.loginApiURL, JSON.stringify(client),this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}  

getToken(){
  let formdata =new FormData();
  formdata.append("username","tom");
  formdata.append("password","123");
 this.http.post(this.TokenURL, formdata, { responseType: 'text' as 'json' } ).subscribe(data=>{
   this.token=data;
 })
}








  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }




}









