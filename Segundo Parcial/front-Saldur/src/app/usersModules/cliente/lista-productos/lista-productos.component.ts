import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  listas:Array<any> = [];
  productos:Array<any> = [];
  constructor() { }

  ngOnInit() {

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

  }

  

}