import { Routes } from '@angular/router';
import { MedicalRecordsPageComponent } from './medical-records-page/medical-records-page.component';

export const MEDICAL_RECORDS_ROUTES: Routes = [
  { path: '', component: MedicalRecordsPageComponent },
  { path: '**', redirectTo: '' },
];
