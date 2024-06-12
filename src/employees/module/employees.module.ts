import { Module } from '@nestjs/common';
import { EmployeesService } from '../service/employees.service';
import { EmployeesController } from '../controller/employees.controller';

@Module({
  providers: [EmployeesService],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
