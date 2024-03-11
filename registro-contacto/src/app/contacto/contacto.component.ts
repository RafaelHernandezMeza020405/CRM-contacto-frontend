import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto';
import { ContactoService } from '../servicio/contacto.service'; 

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
titulo:string ="Lista de contactos";
contacto:Contacto = {
  nombres: '',
  apellidos: '',
  email: '',
  celular: '',
  fechaDeNacimiento: '',
  direccion: '',
  tipoDeContacto: '',
  origen: '',
};

contactos:Contacto[] = [];

  constructor(private contactoService:ContactoService){this.obtenerContacto}

  ngOnInit(): void{
    this.contactoService.getAll().subscribe(
      c => this.contactos=c
    );

      

  }

  obtenerContacto():void{
    this.contactoService.get(this.contacto.email).subscribe(
      c=> this.contacto=c
    );

  }

  delete(contacto:Contacto):void{
    console.log("Metodo de borrar");
    this.contactoService.delete(contacto).subscribe(
      res => this.contactoService.getAll().subscribe(
        response=>this.contactos=response
      )
    );
  
  }



}
