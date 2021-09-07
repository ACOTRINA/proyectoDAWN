import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {


    const graf = d3.json('http://localhost:3003/productos')
    graf.then((datos:any)=>{
      var canvas = d3.select('#d3').append('svg')
      .attr('width',500)
      .attr('height',500)

      canvas.selectAll('rect')
      .data(datos)
      .enter()
        .append('rect')
        .attr('width', function(d:any){return d.precio })
        .attr('height',48)
        .attr('y',function(d:any, i:any){return i *50 })
        .attr('fill','silver')
      
      canvas.selectAll('text')
      .data(datos)
      .enter()
        .append('text')
        .attr('fill','black')
        .attr('y',function(d:any, i:any){return i * 50 +24})
        .text(function(d:any) {return d.productoCodigo })
    })


  }
}



