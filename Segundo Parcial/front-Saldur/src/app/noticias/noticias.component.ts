import { Component, OnInit } from '@angular/core'
import { AppComponent } from '../app.component'
import { noticia } from './noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: Array<noticia> =[];
  constructor(app:AppComponent) {
    app.showNav = false;
    app.showFoot = false; 
   }

  ngOnInit(): void {
    this.cargarNoticias();
  }


  cargarNoticias() : void {
    fetch('https://api.eluniverso.arcpublishing.com/feeds/rss/?website=el-universo&query=taxonomy.sections._id:%22/entretenimiento/motores%22&sort=first_publish_date:desc')
    .then(res =>res.text())
    .then(str =>{
      let parser = new DOMParser();
      let xml = parser.parseFromString(str, "text/xml");
      let recurso = xml.getElementsByTagName("item");
      console.log(recurso)
      for(let item of recurso){
        let titulo = item.getElementsByTagName("title")[0].text;
        let enlace = item.getElementsByTagName("link")[0].innerText;
        
        let descripcion = item.getElementsByTagName('description')[0];
        
        let news: noticia = {
          title: 'titulo',
          link: '',
          description: ''
        } 

        this.noticias.push(news);

      }

    })
  }

}
