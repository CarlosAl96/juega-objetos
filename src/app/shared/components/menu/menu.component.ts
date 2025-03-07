import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuitemComponent } from '../menuitem/menuitem.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterModule, MenuitemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = [
      {
        label: '',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/dashboard'],
          },
          {
            label: 'Asistentes',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/assistants'],
          },
          {
            label: 'Albergues',
            icon: 'pi pi-fw pi-building',
            class: 'rotated-icon',
            routerLink: ['/hostels'],
          },
          {
            label: 'Pacientes',
            icon: 'pi pi-fw pi-address-book',
            routerLink: ['/patients'],
          },
          {
            label: 'Fichas',
            icon: 'pi pi-fw pi-file-o',
            routerLink: ['/medical-records'],
          },
          {
            label: 'Reportes',
            icon: 'pi pi-fw pi-receipt',
            routerLink: ['/reports'],
          },
        ],
      },
    ];
  }
}
