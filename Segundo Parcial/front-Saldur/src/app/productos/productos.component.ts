import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  constructor(app:AppComponent) {
    app.showNav = false;
    app.showFoot = false; 
   }

  ngOnInit(): void {
  }

}
