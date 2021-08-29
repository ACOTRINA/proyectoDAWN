import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  enviarMensaje(body:any){
    return this.http.post('http://localhost:3001/formulario', body);
  }
}
