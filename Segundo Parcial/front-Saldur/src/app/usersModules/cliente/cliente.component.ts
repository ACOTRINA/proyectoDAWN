import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  showperfil = true;
  showlistas = true;
  showcrearlista = true;
  id = '';
  constructor(app:AppComponent, private rutaActiva: ActivatedRoute) {
    app.showNav = true;
    app.showFoot = true; 
   }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params:  Params) => {
        this.id = params.id;
      }
    )
    
  }

  cambiarPerfil(): void {
    this.showcrearlista = true;
    this.showlistas = true;
    this.showperfil = false;
  }

  cambiarLista(): void {
    this.showlistas = true;
    this.showperfil = true;
    this.showcrearlista = false;
  }
  cambiarListas(): void {
    this.showperfil = true;
    this.showcrearlista = true;
    this.showlistas = false;
  }

  



}
