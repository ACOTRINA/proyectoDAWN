import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(app: AppComponent) {
    app.showNav = false;
    app.showFoot = false; 

  }

  ngOnInit(): void {
    
    
  }

}
