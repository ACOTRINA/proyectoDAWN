import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from "node_modules/chart.js";

Chart.register(...registerables);

@Component({
  selector: 'app-multiline',
  templateUrl: './multiline.component.html',
  styleUrls: ['./multiline.component.css']
})
export class MultilineComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    fetch("http://localhost:3003/productos")
      .then(response => response.json())
      .then(datos => {
        console.log(datos.length);
        var products = [];
        var precios = [];
        var stock = [];

        let i = 0;
        for (let prod of datos) {
          products[i] = prod.productoCodigo;
          precios[i] = prod.precio;
          stock[i] = prod.stock;
          i += 1;
        }

        const labels = products;
        const data = {
          labels: labels,
          datasets: [
            {
              label: 'Precio',
              data: precios,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgb(75, 192, 192)',
            },
            {
              label: 'Stock',
              data: stock,
              borderColor: 'rgb(165, 105, 189)',
              backgroundColor: 'rgb(165, 105, 189)',

            },
          ]
        };

        var myChart = new Chart("myChart", {
          type: 'line',
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: {
                    size: 18,
                  }
                }
              },
              title: {
                display: false,
              },
            },
            maintainAspectRatio: false,
          },

        });

      })
  }
}


