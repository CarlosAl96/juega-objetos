import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './landing/shared/layout/layout.component';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },

  {
    path: '',
    component: LandingLayoutComponent,
    loadChildren: () =>
      import('./landing/landing.routes').then((m) => m.LANDING_ROUTES),
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
