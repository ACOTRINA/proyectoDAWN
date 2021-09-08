import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  listas:Array<any> = [];
  productos:Array<any> = [];
  detalles:Array<any> = [];
  idlista: String='';
  id = '';
  selectedProducto='';
  constructor(app:AppComponent, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params:  Params) => {
        this.id = params.id;
      }
    )

    // Realice la petición al URL http://localhost:3001/clientes
    // Guarde el resultado en el atributo clientes
    fetch("http://localhost:3001/users/listas")
    .then(response => response.json())
    .then(listas => {
      this.listas = listas 
    })

  //let temp:any =document.querySelector("select#inputGroupSelect01");
    
  fetch("http://localhost:3001/productos")
    .then(response => response.json())
    .then(productos => {
      this.productos= productos
      
    })
    .catch(console.error);

    fetch("http://localhost:3001/detalle")
    .then(response => response.json())
    .then(detalles => {
      this.detalles= detalles
      
    })
    .catch(console.error);
    
    

   

  

}

iguales(id: any, listaid: any): boolean{
  console.log(id,listaid)
  if(id ==listaid){
    return true;
  }
  return false;

}



}