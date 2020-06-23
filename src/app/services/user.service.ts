import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe@hotmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kev.johnson@gmail.com',
        isActive: false,
        registered: new Date('03/11/2019 06:20:00'),
        hide: true,
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@hotmail.com',
        isActive: true,
        registered: new Date('11/02/2020 10:30:00'),
        hide: true,
      },
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
