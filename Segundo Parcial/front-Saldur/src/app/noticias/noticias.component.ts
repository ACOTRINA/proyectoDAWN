import { Component, OnInit } from '@angular/core'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(app:AppComponent) {
    app.showNav = false;
    app.showFoot = false; 
   }

  ngOnInit(): void {
  }

}
