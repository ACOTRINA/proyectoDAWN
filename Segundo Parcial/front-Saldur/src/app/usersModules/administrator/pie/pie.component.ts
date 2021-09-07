// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var colors = d3.scaleOrdinal(d3.schemeDark2)
    var width = 750, height = 500;
    var svg = d3.select('#d3-pie').append('svg')
                .attr("width",width).attr("height",height)
    
    const graf = d3.json('http://localhost:3003/productos')
    graf.then((datos:any)=>{
      var data = d3.pie().sort(null).value(function(d:any){return d.stock})(datos);
      var segments = d3.arc()
                      .innerRadius(0)
                      .outerRadius(200)
                      .padAngle(.05)
                      .padRadius(50);

      var sections = svg.append("g")
      .attr('transform', 'translate(250,250)')
      .selectAll('path')
      .data(data);

      sections.enter()
      .append('path')
      .attr('d',segments).attr('fill', function(d){return colors(d.data.stock)})
      
  
      var content = d3.select('g').selectAll('text').data(data);
      content.enter().append('text').classed('inside',true).each(function(d){
        var center = segments.centroid(d);
        d3.select(this).attr('x',center[0]).attr('y',center[1])
          .text(d.data.stock)
      })

      var legends = svg.append('g').attr('transform', 'translate(500,100)')
                    .selectAll('.legends').data(data);

      var legend = legends.enter().append('g').classed('legends',true)
      .attr('transform', function(d,i) {return 'translate(0,'+ (i+1)*30+')';});

      legend.append('rect').attr('width',20).attr('height',20).attr('fill', function(d){return colors(d.data.stock)});
      legend.append('text').classed('label',true).text(function(d) {return d.data.productoCodigo;}).attr('fill', function(d){return colors(d.data.stock)})
                            .attr('x',30).attr('y',20)

    })

  }

}
