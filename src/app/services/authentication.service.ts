import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor( private http: Http) { }

  authenticateUser(username: string, password: string) {
    return this.http.post('/login', {
      'username': username,
      'password': password
    }).map(res => res.json());
  }

  isLoggedIn() {
    if (localStorage.getItem('user') !== null) {
      return true;
    } else {
      return false;
    }
  }
}
