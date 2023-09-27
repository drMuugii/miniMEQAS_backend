import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Instrument } from 'src/resource/instrument/model/instrument.model';

@Table
export class Participant extends Model {
  @Column({ primaryKey: true })
  id: string;
  @Column
  participantId: string;
  @Column
  participantName: string;
  @Column
  participanttype: string;
  @Column
  contactPerson: string;
  @Column
  phone: number;
  @Column
  email: string;
  @HasMany(() => Instrument)
  Instruments: Instrument[];
}
