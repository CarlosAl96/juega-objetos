import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { LayoutComponent } from './shared/layout/layout.component';
import { noAuthGuard } from './core/guards/no-auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
    // canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/dashboard/dashboard.routes').then(
        (m) => m.DASHBOARD_ROUTES
      ),

    // canActivate: [noAuthGuard],
  },
  {
    path: 'assistants',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/assistants/assistants.routes').then(
        (m) => m.ASSISTANTS_ROUTES
      ),
    // canActivate: [adminGuard],
  },
  {
    path: 'hostels',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/hostels/hostels.routes').then((m) => m.HOSTELS_ROUTES),
    // canActivate: [adminGuard],
  },
  {
    path: 'medical-records',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/medical-records/medical-records.routes').then(
        (m) => m.MEDICAL_RECORDS_ROUTES
      ),
    // canActivate: [noAuthGuard],
  },
  {
    path: 'patients',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/patients/patients.routes').then(
        (m) => m.PATIENTS_ROUTES
      ),
    // canActivate: [noAuthGuard],
  },
  {
    path: 'reports',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/reports/reports.routes').then((m) => m.REPORTS_ROUTES),
    // canActivate: [noAuthGuard],
  },

  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
