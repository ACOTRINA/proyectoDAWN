import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path:'index', component:IndexComponent },
  {path: 'productos', component:ProductosComponent},
  {path:'', redirectTo:'/index', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
