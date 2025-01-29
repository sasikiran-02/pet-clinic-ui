import { Pet } from './pet.model';

export class Consultation {
  id: number;
  pet: Pet;
  consultationDate: string; // ISO date string
  fee: number;
  description: string;

  constructor(
    id: number,
    pet: Pet,
    consultationDate: string,
    fee: number,
    description: string
  ) {
    this.id = id;
    this.pet = pet;
    this.consultationDate = consultationDate;
    this.fee = fee;
    this.description = description;
  }
}
