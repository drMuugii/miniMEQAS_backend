import { Controller, Get } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('participant')
@Controller('participant')
export class ParticipantController {
  constructor(private readonly ParticipantService: ParticipantService) {}
  @Get()
  getParticipant(): any {
    return this.ParticipantService.getParticipant();
  }
}
