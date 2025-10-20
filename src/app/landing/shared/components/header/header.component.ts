import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class LandingHeaderComponent {
  menu = [
    { label: 'Inicio', icon: 'pi pi-home', routerLink: [''] },
    { label: 'Resultados', icon: 'pi pi-chart-bar', routerLink: ['/resultados'] },
    { label: 'Premios', icon: 'pi pi-gift', routerLink: ['/premios'] },
    { label: 'Contacto', icon: 'pi pi-envelope', routerLink: ['/contacto'] },
  ];

  onLogoError(event: Event) {
    const img = event.target as HTMLImageElement;
    // Hide image if not found; brand title still visible
    img.style.display = 'none';
  }
}
