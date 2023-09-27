import { Module } from '@nestjs/common';
import { ParticipantController } from './participant.controller';
import { ParticipantService } from './participant.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Participant } from './models/participant.model';

@Module({
  imports: [SequelizeModule.forFeature([Participant])],
  controllers: [ParticipantController],
  providers: [ParticipantService],
  exports: [ParticipantService],
})
export class ParticipantModule {}
