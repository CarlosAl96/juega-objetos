import { Routes } from '@angular/router';
import { PatientsPageComponent } from './patients-page/patients-page.component';

export const PATIENTS_ROUTES: Routes = [
  { path: '', component: PatientsPageComponent },
  { path: '**', redirectTo: '' },
];
