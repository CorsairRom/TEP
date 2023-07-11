import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  public sidebarItems = [
    {label: 'Empresas', icon: 'apartment', url: './empresas/listado'},
    {label: 'Empleados', icon: 'groups', url: './empleados/listado'},
    {label: 'Buscar', icon: 'search', url: './buscar'},
  ]
}
