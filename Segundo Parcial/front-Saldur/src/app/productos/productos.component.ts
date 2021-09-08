import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  productos:Array<any> = [];
  constructor(app:AppComponent) {
    app.showNav = false;
    app.showFoot = false; 
   }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    fetch("http://localhost:3001/productosactuales")
    .then(response => response.json())
    .then(productos => {
     
      for(let producto of productos){
        this.productos = producto;
      }
    })
    .catch(console.error);

  }
  }

}
