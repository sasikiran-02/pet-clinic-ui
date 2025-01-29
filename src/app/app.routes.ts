import { Routes } from '@angular/router';
import { ConsultationListComponent } from './consultation-list/consultation-list.component';
import { BookConsultationComponent } from './book-consultation/book-consultation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/consultations', pathMatch: 'full' },
  { path: 'consultations', component: ConsultationListComponent },
  { path: 'book', component: BookConsultationComponent },
];
