import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { GestionarPlatillosComponent } from './components/gestionar-platillos/gestionar-platillos.component';

const routes: Routes = [
  {path : '', component : GestionarPlatillosComponent}
  //{path : '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
