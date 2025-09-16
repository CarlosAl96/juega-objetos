import { Routes } from '@angular/router';
import { BillingPageComponent } from './billing-page/billing-page.component';

export const BILLING_ROUTES: Routes = [
  { path: '', component: BillingPageComponent },
  { path: '**', redirectTo: '' },
];
