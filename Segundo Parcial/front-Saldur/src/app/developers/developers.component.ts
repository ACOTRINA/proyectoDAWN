import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  constructor(app: AppComponent) {
    app.showNav = false;
    app.showFoot = false; 
   }

  ngOnInit(): void {
  }

}
