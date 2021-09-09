import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarios:Array<any> = [];
  constructor() { 
    
  }

  ngOnInit(): void {

    fetch("http://localhost:3001/users/usuarios")
    .then(response => response.json())
    .then(usuarios => {
      this.usuarios = usuarios 
    })
  }



}
