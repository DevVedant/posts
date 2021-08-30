import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { observable, Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class EmployeeService {
  private url: string = '/assets/data/employee.json';
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url).catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse) {
    return observable.throw(error.message || 'server error');
  }
}
