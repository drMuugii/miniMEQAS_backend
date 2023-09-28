import { Controller, Get } from '@nestjs/common';
import { ResultService } from './result.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('result')
@Controller('result')
export class ResultController {
  constructor(private readonly ResultService: ResultService) {}
  @Get('test')
  getHello(): string {
    return this.ResultService.getHello();
  }
}
