import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Contacto } from '../contacto/contacto';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private url:string = "http://localhost:8080/contacto";
  
  constructor(private http:HttpClient) { }

  
  getAll():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.url);
  }

  create(contacto:Contacto):Observable<Contacto>{
    return this.http.post<Contacto>(this.url, contacto);
  }

  get(nombres:string):Observable<Contacto>{
    return this.http.get<Contacto>(this.url + "/" + nombres);
  }

  delete(contacto:Contacto):Observable<Contacto>{
    return this.http.delete<Contacto>(this.url+ "/" + contacto.nombres); 
   }

  update(nombres:string,contacto:Contacto):Observable<Contacto>{
    return this.http.put<Contacto>(`${this.url}/${nombres}`, contacto);
      
  } 
  
}
