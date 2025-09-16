import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },

  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.routes').then((m) => m.LANDING_ROUTES),
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
