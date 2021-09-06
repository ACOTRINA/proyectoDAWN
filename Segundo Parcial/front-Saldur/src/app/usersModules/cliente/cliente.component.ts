import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  showperfil = true
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
    this.showperfil = false;
  }

  



}
