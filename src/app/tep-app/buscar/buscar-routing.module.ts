import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPageComponent } from './pages/buscar-page/buscar-page.component';

const routes: Routes = [{path:'', component: BuscarPageComponent},
                        {path: '**', redirectTo: 'buscar'},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarRoutingModule { }
