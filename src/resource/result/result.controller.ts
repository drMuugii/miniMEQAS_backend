import { Controller, Get } from '@nestjs/common';
import { ResultService } from './result.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('result')
@ApiTags('result')
export class ResultController {
  constructor(private readonly ResultService: ResultService) {}
  @Get('sss')
  getHello(): string {
    return this.ResultService.getHello();
  }
}
