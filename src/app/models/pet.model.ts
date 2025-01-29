import { Owner } from './owner.model';

export class Pet {
  id: number;
  name: string;
  type: string;
  owner: Owner;

  constructor(id: number, name: string, type: string, owner: Owner) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.owner = owner;
  }
}
