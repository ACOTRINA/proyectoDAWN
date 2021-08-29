import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {

  constructor(public msg:MessageService) { }
  validacion ={
    nombre:'',
    correo:'',
    fecha:'',
    telefono:'',
    lugar:'',
    mensaje:''
  }
  
enviar(form:any){
  console.log('enviado')
  this.msg.enviarMensaje(form).subscribe(()=>{
    console.log('Mensaje enviado');
    alert('Mensaje enviado, Gracias!!!');
  })
  this.validacion ={
    nombre:'',
    correo:'',
    fecha:'',
    telefono:'',
    lugar:'',
    mensaje:''
  }
  
}

  contactForm(form:any){
    console.log('enviado')
    this.msg.enviarMensaje(form).subscribe(()=>{
      console.log('Mensaje enviado');
      alert('Mensaje enviado, Gracias!!!');
    })
  }
}
