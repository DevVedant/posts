import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  getEmployee() {
    return [
      { id: 1, name: 'prakash', age: 28 },
      { id: 2, name: 'kailash', age: 40 },
      { id: 3, name: 'vikas', age: 38 },
      { id: 4, name: 'suresh', age: 35 },
      { id: 5, name: 'rakesh', age: 34 },
    ];
  }
}
