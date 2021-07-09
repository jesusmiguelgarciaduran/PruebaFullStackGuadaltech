import { Component,OnInit } from '@angular/core';
import { BecariosService } from './service/becarios.service' 
import { Becarios } from './models/becarios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  becariosArray:Becarios[];
  constructor(private service:BecariosService){
    
  }
  ngOnInit(){
    this.service.get().subscribe(data => {
      this.becariosArray = data;
      console.log(this.becariosArray);
      
    });
  } 
}
