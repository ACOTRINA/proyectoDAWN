import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';

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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MessageService } from './services/message.service';
import { GraficasComponent } from './graficas/graficas.component';
import { GraficasService } from './services/graficas.service';
import { ClienteComponent } from './usersModules/cliente/cliente.component';
import { AdministratorComponent } from './usersModules/administrator/administrator.component';
import { PerfilComponent } from './usersModules/cliente/perfil/perfil.component';
import { ListaProductosComponent } from './usersModules/cliente/lista-productos/lista-productos.component';
import { ListaComponent } from './usersModules/cliente/lista/lista.component';





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
    LoginComponent,
    SignupComponent,
    GraficasComponent,
    ClienteComponent,
    AdministratorComponent,
    PerfilComponent,
    ListaComponent,
    ListaProductosComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatBadgeModule,
  ],
  providers: [MessageService,GraficasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
