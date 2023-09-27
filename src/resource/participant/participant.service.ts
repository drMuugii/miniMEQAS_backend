import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Participant } from './models/participant.model';
import { Instrument } from '../instrument/model/instrument.model';

@Injectable()
export class ParticipantService {
  constructor(@InjectModel(Participant) private participantModel: typeof Participant) {}
  getParticipant(): any {
    return this.participantModel.findAll({
      include: [
        {
          model: Instrument,
        },
      ],
    });
  }
}
