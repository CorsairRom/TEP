import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'empresas', loadChildren: () => import('../tep-app/empresas/empresas.module').then( m => m.EmpresasModule)},
      { path: 'empleados', loadChildren: () => import('../tep-app/empleados/empleados.module').then( m => m.EmpleadosModule)},
      { path: 'buscar', loadChildren: ()=> import('../tep-app/buscar/buscar.module').then( m => m.BuscarModule)},
      {path: '**', redirectTo: '/'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TepAppRoutingModule { }
