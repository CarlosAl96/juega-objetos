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
            routerLink: ['/admin/dashboard'],
          },
          {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/admin/users'],
          },
          {
            label: 'Facturación',
            icon: 'pi pi-fw pi-money-bill',
            class: 'rotated-icon',
            routerLink: ['/admin/billing'],
          },
        ],
      },
    ];
  }
}
