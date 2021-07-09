import { Component } from '@angular/core';

import { Becarios } from './models/becarios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   becariosArray:Becarios[]=[
     {id:"1",nombre:"saldf"},
     {id:"1"}
   ];
  
}
