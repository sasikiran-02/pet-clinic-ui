import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../services/consultation.service';
import { Consultation } from '../models/consultation.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultation-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultation-list.component.html',
  styleUrls: ['./consultation-list.component.css'],
})
export class ConsultationListComponent implements OnInit {
  consultations: Consultation[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private consultationService: ConsultationService) {}

  ngOnInit(): void {
    this.fetchAllConsultations();
  }

  // Fetch all consultations
  fetchAllConsultations(): void {
    this.isLoading = true;
    this.consultationService.getAllConsultations().subscribe(
      (data) => {
        this.consultations = data;
        this.isLoading = false;
        console.log(this.consultations);
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to load consultations.';
      }
    );
  }
}
