import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id',//el "id indica el identificador del pais, esto hace que sea dinamico",
    component: VerPaisComponent
  },
  {
    //esta ultoma ruta es en caso de que el usuario navegue a una ruta que no existe, entonces lo que hace es que lo redirecciona a la ruta que le indicamos

    path:'**',//significa que cualquier otra ruta que no hayamos indicado
    redirectTo:''//aca le indicamos a cual ruta va a ser redirigida
  }


];
@NgModule({
  imports: [

    RouterModule.forRoot(routes)

  ],
  exports: [

    RouterModule
  ]
})
export class AppRoutingModule { }
