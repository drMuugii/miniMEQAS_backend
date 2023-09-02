import {
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Instrument } from 'src/resource/instrument/model/instrument.model';

@Table
export class User extends Model {
  @Column({ primaryKey: true })
  id: string;
  @Column
  userId: string;
  @Column
  userName: string;
  @Column
  userType: string;
  @Column
  contactPerson: string;
  @Column
  phone: number;
  @Column
  email: string;
  @HasMany(() => Instrument)
  Instruments: Instrument[];
}
