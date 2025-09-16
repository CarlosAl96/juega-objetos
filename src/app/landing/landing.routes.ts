import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  { path: '**', redirectTo: '' },
];
