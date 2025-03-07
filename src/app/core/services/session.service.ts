import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { UserTokenData } from '../models/userTokenData';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private readonly router: Router) {}
  saveSession(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  readSession(key: string): UserTokenData | null {
    if (sessionStorage.getItem(key) == null) {
      return null;
    }
    return jwtDecode(sessionStorage.getItem(key)!);
  }

  deleteSession() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
