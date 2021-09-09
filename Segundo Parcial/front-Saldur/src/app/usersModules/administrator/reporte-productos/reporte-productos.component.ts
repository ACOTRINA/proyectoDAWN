import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-reporte-productos',
  templateUrl: './reporte-productos.component.html',
  styleUrls: ['./reporte-productos.component.css']
})

export class ReporteProductosComponent implements OnInit {
  data:Array<any> = [];
  datanodb:Array<any> = [];
  selected = '';

  constructor() { }


  ngOnInit(): void {

    
    fetch("http://localhost:3001/tipo")
    .then(res => res.json())
    .then(productos => {
      this.data =  productos;    


    })
    .catch(console.error);



  }

  nodb(): void{
    fetch("http://localhost:3003/productos/name/" + this.selected)
    .then(res => res.json())
    .then(productos => {
      this.datanodb = productos;
    })
    .catch(console.error)

  }
}
