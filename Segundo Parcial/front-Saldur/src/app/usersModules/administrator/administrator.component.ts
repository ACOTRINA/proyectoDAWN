import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  editarclientes = true;
  showdubirproducto= true;
  id = '';

  
  showreporte: boolean = true;
  showbar: boolean = false;
  showpie: boolean = false;

  constructor(app:AppComponent, private rutaActiva: ActivatedRoute) { 

    app.showNav = true;
    app.showFoot = true

  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params:  Params) => {
        this.id = params.id;
      }
    )
  }
  editarClientes(): void {
    this.showreporte = true;
    this.showdubirproducto = true;
    this.editarclientes = false;
  }


  cambiarReporte(): void {
    this.editarclientes = true;
    this.showdubirproducto = true;
    this.showreporte = false;
  }
  cambiarAgregarProducto(): void {
    this.editarclientes = true;
    this.showreporte = true;
    this.showdubirproducto = false;
  }


  mostrarReporte(): void {
    this.showreporte =  false;
    this.showpie = true;
    this.showbar = true;
  }

  mostrarEditarClientes(): void {
    this.showreporte = true;

  }

  inicio(): void {
    this.showreporte =  true;
    this.showpie = false;
    this.showbar = false;
  }


}
