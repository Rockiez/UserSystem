import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './users/user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11,
        first_name: 'Nice',
        last_name: 'Zhao',
        email: '11@abc.com',
        password: '123456',
        age: 22,
        weight: 70,
        height: 182,
        // admin: false
      },

      { id: 12,
        first_name: 'Narco',
        last_name: 'Qian',
        email: '12@abc.com',
        password: '123456',
        age: 24,
        weight: 92,
        height: 185,
        // admin: false
      },

      { id: 13,
        first_name: 'Bombasto',
        last_name: 'Sun',
        email: '13@abc.com',
        password: '123456',
        age: 34,
        weight: 75,
        height: 172,
        // admin: false
      },

      { id: 14,
        first_name: 'Celeritas',
        last_name: 'Li',
        email: '14@abc.com',
        password: '123456',
        age: 45,
        weight: 66,
        height: 182,
        // admin: false
      },

      { id: 15,
        first_name: 'Magneta',
        last_name: 'Zhou',
        email: '15@abc.com',
        password: '123456',
        age: 23,
        weight: 66,
        height: 170,
        // admin: false
      },

      { id: 16,
        first_name: 'RubberMan',
        last_name: 'Wu',
        email: '16@abc.com',
        password: '123456',
        age: 31,
        weight: 50,
        height: 150,
        // admin: false
      },

      { id: 17,
        first_name: 'Dynama',
        last_name: 'Zheng',
        email: '17@abc.com',
        password: '123456',
        age: 27,
        weight: 120,
        height: 200,
        // admin: false
      },

      { id: 18,
        first_name: 'IQ',
        last_name: 'Wang',
        email: '18@abc.com',
        password: '123456',
        age: 31,
        weight: 72,
        height: 190,
        // admin: false
      },

      { id: 19,
        first_name: 'Magma',
        last_name: 'Feng',
        email: '19@abc.com',
        password: '123456',
        age: 42,
        weight: 60,
        height: 120,
        // admin: false
      },

      { id: 20,
        first_name: 'Tornado',
        last_name: 'Cheng',
        email: '20@abc.com',
        password: '123456',
        age: 28,
        weight: 80,
        height: 162,
        // admin: false
      },
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
