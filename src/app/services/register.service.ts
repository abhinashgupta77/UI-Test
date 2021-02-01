import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  private profileUpdate = new Subject<any>();
  constructor() {}

  getUserProfile() {
    return this.profileUpdate.asObservable();
  }

  setUserProfile(user) {
    this.profileUpdate.next({
      firstName: user.firstName,
      lastName: user.lastName
    });
  }
}
