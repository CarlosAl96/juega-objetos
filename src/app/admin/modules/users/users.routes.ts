import { Routes } from '@angular/router';
import { UsersPageComponent } from './users-page/users-page.component';

export const USERS_ROUTES: Routes = [
  { path: '', component: UsersPageComponent },
  { path: '**', redirectTo: '' },
];
