import { Routes } from '@angular/router';
import { HostelsPageComponent } from './hostels-page/hostels-page.component';

export const HOSTELS_ROUTES: Routes = [
  { path: '', component: HostelsPageComponent },
  { path: '**', redirectTo: '' },
];
