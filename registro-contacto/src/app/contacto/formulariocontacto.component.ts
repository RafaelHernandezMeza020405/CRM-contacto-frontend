import { Component, OnInit } from '@angular/core';
import { ContactoService } from './contacto.service';
import { Contacto } from './contacto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulariocontacto',
  templateUrl: './formulariocontacto.component.html',
  styleUrls: ['./formulariocontacto.component.css']
})
export class FormulariocontactoComponent implements OnInit{

  contacto:Contacto = new Contacto();
  titulo:string="Nuevo contacto";
  tiposdecontactos:string[]=["Cliente", "Administrador"];
  listaciudades:string[] = ["Cartagena", "Barranquilla", "Medellin"];

  constructor(private contactoService:ContactoService, private router:Router){}

  ngOnInit():void{
  }

  create():void{
    console.log(this.contacto);
    this.contactoService.create(this.contacto).subscribe(
      res=>this.router.navigate(['/contactos'])
    );
  }
}
