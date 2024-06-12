import { Injectable } from '@nestjs/common';

import { Employees } from '../shared/models/employees.models';

@Injectable()
export class EmployeesService {
  private readonly employees: Employees[] = [];

  create(employees: Employees): Employees {
    employees.id = this.employees.length + 1;
    this.employees.push(employees);
    return employees;
  }

  findAll(): Employees[] {
    return this.employees;
  }
}
