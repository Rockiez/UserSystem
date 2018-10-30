import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, first_name: 'Mr. Nice' },
      { id: 12, first_name: 'Narco' },
      { id: 13, first_name: 'Bombasto' },
      { id: 14, first_name: 'Celeritas' },
      { id: 15, first_name: 'Magneta' },
      { id: 16, first_name: 'RubberMan' },
      { id: 17, first_name: 'Dynama' },
      { id: 18, first_name: 'Dr IQ' },
      { id: 19, first_name: 'Magma' },
      { id: 20, first_name: 'Tornado' }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
