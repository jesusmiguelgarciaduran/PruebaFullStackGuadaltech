import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BecariosService {
  url="https://guadaltech-fullstack.herokuapp.com/api/becarios/";
  constructor(private http: HttpClient) {}
 
  get(): Observable<any>{
    return this.http.get(this.url);
    
  }
}
