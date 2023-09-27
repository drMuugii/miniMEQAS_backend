import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Instrument } from 'src/resource/instrument/model/instrument.model';
import { Program } from './program.model';
import { Participant } from 'src/resource/participant/models/participant.model';

@Table
export class ProgramUser extends Model {
  @Column({ primaryKey: true })
  id: string;

  @Column
  @ForeignKey(() => Program)
  programId: string;
  @BelongsTo(() => Program)
  Program: Program; 

  @Column
  @ForeignKey(() => Participant)
  participantId: string;
  @BelongsTo(() => Participant)
  Participant: Participant;

  @Column
  @ForeignKey(() => Instrument)
  InstrumentId: string;
  @BelongsTo(() => Instrument)
  Instrument: Instrument;

  @Column
  sampleTaken: Date;
  @Column
  sampleMeasured: Date;
  @Column
  sampleStatus: string;
}
