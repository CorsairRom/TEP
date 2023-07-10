import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TepAppRoutingModule } from './tep-app-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    TepAppRoutingModule,
    MaterialModule
  ]
})
export class TepAppModule { }
