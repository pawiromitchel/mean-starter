import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BatchService {

  constructor(private http: Http) { }

  getAllBatches() {
    return this.http.get('/batches/getAllBatches').map(res => res.json());
  }

  getInternOpgeleverdeBatches() {
    return this.http.get('/batches/getInternOpgeleverdeBatches').map(res => res.json());
  }
}
