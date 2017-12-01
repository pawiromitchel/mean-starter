import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getAllUsers() {
    return this.http.get('/users/getAllUsers').map(res => res.json());
  }

  getAllControleurs() {
    return this.http.get('/users/getAllControleurs').map(res => res.json());
  }
}
