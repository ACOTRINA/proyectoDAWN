import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  showperfil = true
  constructor(app:AppComponent) {
    app.showNav = true;
    app.showFoot = true; 
   }

  ngOnInit(): void {
  }

  cambiarPerfil(): void {
    this.showperfil = false;
  }

}
