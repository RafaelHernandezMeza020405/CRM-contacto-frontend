import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormulariocontactoComponent } from './formulario-de-registro/formulariocontacto.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { FormulariodeactualizacionComponent } from './formulario-de-actualizacion/formulariodeactualizacion.component';


const routes:Routes=[
  {path:'', redirectTo:'/contactos', pathMatch:'full'},
  {path:'contactos', component:ContactoComponent},
  {path:'contactos/form', component:FormulariocontactoComponent},
  {path:'contactos/formulariodeactualizacion/:nombres', component:FormulariodeactualizacionComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    FormulariocontactoComponent,
    FormulariodeactualizacionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
