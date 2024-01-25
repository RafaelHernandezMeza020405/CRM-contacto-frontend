import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormulariocontactoComponent } from './contacto/formulariocontacto.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


const routes:Routes=[
  {path:'', redirectTo:'/contactos', pathMatch:'full'},
  {path:'contactos', component:ContactoComponent},
  {path:'contactos/form', component:FormulariocontactoComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    FormulariocontactoComponent,
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
