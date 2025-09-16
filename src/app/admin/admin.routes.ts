import { Routes } from '@angular/router';
import { noAuthGuard } from '@core/guards/no-auth.guard';
import { LayoutComponent } from '@admin/shared/layout/layout.component';
import { authGuard } from '@core/guards/auth.guard';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
    canActivate: [noAuthGuard],
  },

  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/dashboard/dashboard.routes').then(
        (m) => m.DASHBOARD_ROUTES
      ),
    canActivate: [authGuard],
  },

  {
    path: 'users',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/users/users.routes').then((m) => m.USERS_ROUTES),
    canActivate: [authGuard],
  },

  {
    path: 'billing',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/billing/billing.routes').then((m) => m.BILLING_ROUTES),
    canActivate: [authGuard],
  },

  { path: '**', redirectTo: 'dashboard' },
];
