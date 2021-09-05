import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  constructor(app:AppComponent) { 
    app.showNav = true;
    app.showFoot = true; 
  }

  ngOnInit(): void {
  }

}
