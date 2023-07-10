import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './tep-app/pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
