import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contacto } from './contacto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private url:string = "http://localhost:8080/contacto";
  
  constructor( private http:HttpClient) { }

  getAll():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.url);
  }

  create(contacto:Contacto):Observable<Contacto>{
    return this.http.post<Contacto>(this.url, contacto);
  }

  get(contacto:Contacto):Observable<Contacto>{
    return this.http.get<Contacto>(this.url + "/" + contacto.nombres);
  }

  

}
