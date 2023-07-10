import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './tep-app/pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/tep-app/tep-app.module').then(m => m.TepAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
