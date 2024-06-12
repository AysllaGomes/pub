import { Body, Controller, Get, Post } from '@nestjs/common';

import { Employees } from '../shared/models/employees.models';

import { EmployeesService } from '../service/employees.service';

@Controller('employees.models.ts')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() funcionario: Employees): Employees {
    return this.employeesService.create(funcionario);
  }

  @Get()
  findAll(): Employees[] {
    return this.employeesService.findAll();
  }
}
