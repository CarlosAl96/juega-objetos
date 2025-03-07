import { Routes } from '@angular/router';
import { AssistantsPageComponent } from './assistants-page/assistants-page.component';

export const ASSISTANTS_ROUTES: Routes = [
  { path: '', component: AssistantsPageComponent },
  { path: '**', redirectTo: '' },
];
