import { Controller, Get } from '@nestjs/common';
import { InstrumentService } from './instrument.service';

@Controller()
export class InstrumentController {
  constructor(private readonly InstrumentService: InstrumentService) {}
  @Get()
  getHello(): string {
    return this.InstrumentService.getHello();
  }
}
