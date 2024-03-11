import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/contacto/contacto';
import { ContactoService } from '../servicio/contacto.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-formulariodeactualizacion',
  templateUrl: './formulariodeactualizacion.component.html',
  styleUrls: ['./formulariodeactualizacion.component.css']
})
export class FormulariodeactualizacionComponent implements OnInit {
  contacto: Contacto = new Contacto();
  titulo: string = "Nuevo contacto";
  tiposdecontactos: string[] = ["Cliente", "Administrador"];
  listaciudades: string[] = ["Cartagena", "Barranquilla", "Medellin"];

  constructor(private contactoService: ContactoService, private router: Router, private activatedRouter: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.cargar();
  }
  cargar(): void {
    this.activatedRouter.params.subscribe(
      e => {
        let email = e['email'];
        if (email) {
          this.contactoService.get(email).subscribe(
            es => {
              this.contacto = es;
            }

          );
        }
      }
    )
  }



  updateC(): void {
    this.contactoService.update(this.contacto.email,this.contacto).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/contactos']);
      }
    );   
  } 
    
  }

