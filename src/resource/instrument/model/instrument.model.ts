import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { InstrumentModel } from './instrument_model.model';
import { User } from 'src/resource/user/models/user.model';

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
  InstrumentModelId: string;
  @Column
  @ForeignKey(() => User)
  UserId: string;
}
