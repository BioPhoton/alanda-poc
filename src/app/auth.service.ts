import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = new BehaviorSubject(false);
  constructor() { }

  login() {
    this.user$.next(true);
  }
  logout() {
    this.user$.next(false);
  }
}
