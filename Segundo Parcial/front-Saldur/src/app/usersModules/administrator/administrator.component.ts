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
  nombreusuario: string = '';

  

  
  showreporte: boolean = true;
  showbar: boolean = false;
  showpie: boolean = false;
  showmultiline: boolean = false;

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
    this.getNombre();
  }

  getNombre(): void {
    fetch('http://localhost:3001/users/listausuarios')
    .then(res => res.json())
    .then(usuarios => {
      for(let usuario of usuarios){
        if(usuario.id == this.id){
          this.nombreusuario = usuario.nombre;

        }
      }


    })
  .catch(console.error);


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
    this.showmultiline = true;
    this.showpie = true;
    this.showbar = true;
  }


  mostrarReporte(): void {
    this.showreporte =  false;
    this.showpie = true;
    this.showbar = true;
    this.showmultiline = true;
    this.showdubirproducto = true;
  }

  mostrarEditarClientes(): void {
    this.showreporte = true;

  }

  inicio(): void {
    this.showreporte =  true;
    this.showpie = false;
    this.showbar = false;
    this.showmultiline = false;
    this.showdubirproducto = true;
  }


}
