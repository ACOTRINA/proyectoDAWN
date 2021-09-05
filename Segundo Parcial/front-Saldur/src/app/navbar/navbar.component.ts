import { Component, OnInit } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showNav = false;
  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
