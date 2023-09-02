import { Controller, Get } from '@nestjs/common';
import { ProgramService } from './program.service';

@Controller('program')
export class ProgramController {
  constructor(private readonly ProgramService: ProgramService) {}
  @Get()
  getHello(): string {
    return this.ProgramService.getHello();
  }
}
