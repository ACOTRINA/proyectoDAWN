import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  productos:Array<any> = [];
  productoFiltrado: Array<any> = [];
  constructor(app:AppComponent) {
    app.showNav = false;
    app.showFoot = false; 
   }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    fetch("assets/databases/data.json")
    .then(response => response.json())
    .then(productos => {
     
      this.productos =  productos.productos;
      this.productoFiltrado = this.productos;
    })
    .catch(console.error);

  }

  filtroCaneca(): void {
    this.productoFiltrado = []
    for(let producto of this.productos){
      if(producto.imagen.includes('Caneca')){
        this.productoFiltrado.push(producto);
      }
      
    }
  }

  filtroTanque(): void {
    this.productoFiltrado = [];
    for(let producto of this.productos){
      if(producto.imagen.includes('Tanque')){
        this.productoFiltrado.push(producto);
      }
     
    }
  }

  
  

}
