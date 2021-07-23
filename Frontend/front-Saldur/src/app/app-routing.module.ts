import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IndexComponent } from './index/index.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ProductosComponent } from './productos/productos.component';
import { DevelopersComponent } from './developers/developers.component';

const routes: Routes = [
  {path:'index', component:IndexComponent },
  {path: 'productos', component:ProductosComponent},
  {path:'', redirectTo:'/index', pathMatch:'full'},
  {path:'noticias', component: NoticiasComponent},
  {path: 'developers', component: DevelopersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      onSameUrlNavigation: "ignore",
      anchorScrolling:'enabled',
      scrollPositionRestoration: 'enabled'}),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
