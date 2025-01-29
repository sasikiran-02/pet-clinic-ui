import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConsultationService } from '../services/consultation.service';
import { Owner } from '../models/owner.model';
import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-book-consultation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-consultation.component.html',
  styleUrls: ['./book-consultation.component.css'],
})
export class BookConsultationComponent {
  consultation = {
    petId: 0, // petId will be sent to the backend
    consultationDate: '', // Format: 'yyyy-mm-dd' (string initially)
    description: '', // description will be sent to the backend
  };

  owners: Owner[] = [];
  pets: Pet[] = [];
  selectedOwnerId: number = 0;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private consultationService: ConsultationService) {}

  ngOnInit(): void {
    // Fetch all owners when the component initializes
    this.consultationService.getAllOwners().subscribe(
      (owners) => {
        this.owners = owners;
      },
      (error) => {
        console.error('Error fetching owners:', error);
      }
    );
  }

  // Method to fetch pets based on selected owner
  onOwnerSelect(ownerId: number): void {
    this.selectedOwnerId = ownerId;
    if (ownerId) {
      this.consultationService.getPetsByOwnerId(ownerId).subscribe(
        (pets) => {
          this.pets = pets;
        },
        (error) => {
          console.error('Error fetching pets for owner:', error);
        }
      );
    }
  }

  // Form submission method
  onSubmit() {
    // Convert the consultationDate from string to Date object
    const date = new Date(this.consultation.consultationDate); // Convert string to Date object

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      this.errorMessage = 'Please provide a valid date.';
      return;
    }

    // Now, send the data to the backend
    this.consultationService
      .bookConsultation(
        this.consultation.petId,
        date, // Pass Date object directly
        this.consultation.description
      )
      .subscribe(
        (response) => {
          this.successMessage = 'Consultation booked successfully!';
          this.errorMessage = null;
          this.consultation = {
            petId: 0,
            consultationDate: '',
            description: '',
          }; // Reset the form
        },
        (error) => {
          this.errorMessage = 'Failed to book consultation. Please try again.';
          this.successMessage = null;
        }
      );
  }
}
