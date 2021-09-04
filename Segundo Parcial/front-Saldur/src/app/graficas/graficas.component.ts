import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../services/graficas.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  info:any[] = [];
  constructor(private graficaService:GraficasService) { }

  ngOnInit(): void {
    this.graficaService.envirInfo()
    .subscribe((i:any)=>{
      this.info = i;
    });


  }

}
