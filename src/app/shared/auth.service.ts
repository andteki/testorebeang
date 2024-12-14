import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string) {
    if (username === 'admin' && password === 'titok') {
      localStorage.setItem('token', 'admin');
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
