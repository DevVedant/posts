import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employees = [
    { id: 1, name: 'prakash', age: 28 },
    { id: 2, name: 'kailash', age: 40 },
    { id: 3, name: 'vikas', age: 38 },
    { id: 4, name: 'suresh', age: 35 },
    { id: 5, name: 'rakesh', age: 34 },
  ];
  constructor(private employeeServices: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeServices.getEmployee();
  }
}
