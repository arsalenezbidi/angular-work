import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClinetService {

  constructor(
    private http:HttpClient
    
    )

  {}
  getclient ()
  {return this.http.get('')}
}
