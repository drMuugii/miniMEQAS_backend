import { Controller, Get } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('participant')
@Controller('participant')
export class ParticipantController {
  ParticipantService: any;
  constructor(private readonly UserService: ParticipantService) {}
  @Get()
  getUser(): any {
    return this.ParticipantService.getParticipant();
  }
}
