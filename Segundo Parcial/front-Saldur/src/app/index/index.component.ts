import { Component, OnInit } from '@angular/core';
//import * as introJs from 'intro.js';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  play(): void{
    //introJs().start();
  }

}
