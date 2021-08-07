import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DevelopersComponent } from './developers/developers.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { Parte1Component } from './contactenos/parte1/parte1.component';
import { Parte2Component } from './contactenos/parte2/parte2.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    ProductosComponent,
    NoticiasComponent,
    DevelopersComponent,
    ContactenosComponent,
    Parte1Component,
    Parte2Component,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
