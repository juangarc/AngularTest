import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListaComponent } from './components/lista/lista.component';


const routes: Routes = [
  {path: "profile/:id", component: PerfilComponent},
  {path: "lista", component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
