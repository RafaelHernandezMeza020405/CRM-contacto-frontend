import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto';
import { ContactoService } from './contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
titulo:string ="Lista de contactos";
contacto:Contacto = new Contacto();

contactos:Contacto[];

  constructor(private contactoService:ContactoService){}

  ngOnInit(): void{
    this.contactoService.getAll().subscribe(
      c => this.contactos=c
    );

      

  }

  obtenerContacto():void{
    this.contactoService.get(this.contacto).subscribe(
      c=> this.contacto=c
    );

  }

}
