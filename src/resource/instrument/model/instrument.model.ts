import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { InstrumentModel } from './instrument_model.model';
import { Participant } from 'src/resource/participant/models/participant.model';

@Table
export class Instrument extends Model {
  @Column({ primaryKey: true })
  id: string;
  @Column
  manufactureName: string;
  @Column
  active: boolean;
  @Column
  @ForeignKey(() => InstrumentModel)
  instrumentModelId: string;
}
