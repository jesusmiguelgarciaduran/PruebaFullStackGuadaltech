import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BecariosService {

  constructor(private http: HttpClientModule) { 
    
  }
}
