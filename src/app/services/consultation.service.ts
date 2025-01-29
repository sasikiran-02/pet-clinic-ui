import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultation } from '../models/consultation.model';
import { Owner } from '../models/owner.model'; // Import Owner model
import { Pet } from '../models/pet.model'; // Import Pet model
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  private apiUrl = `${environment.host}/consultations`;
  private ownersUrl = `${environment.host}/owners`;
  private petsUrl = `${environment.host}/pets`;

  constructor(private http: HttpClient) {}

  // Fetch all consultations
  getAllConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.apiUrl}`);
  }

  // Book a new consultation
  bookConsultation(
    petId: number,
    consultationDate: Date,
    description: string
  ): Observable<Consultation> {
    const consultation = {
      petId,
      consultationDate,
      description,
    };

    return this.http.post<Consultation>(`${this.apiUrl}/book`, consultation);
  }

  // Get consultations by owner (assuming owner ID is passed)
  getConsultationsByOwner(ownerId: number): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.apiUrl}/owner/${ownerId}`);
  }

  // Fetch all owners
  getAllOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.ownersUrl);
  }

  // Fetch pets by owner ID
  getPetsByOwnerId(ownerId: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.petsUrl}/${ownerId}`);
  }
}
