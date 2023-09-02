import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class InstrumentModel extends Model {
  @Column({ primaryKey: true })
  id: string;
  @Column
  modelName: string;
  @Column
  serialnumber: string;
  @Column
  usedYear: number;
  @Column
  active: boolean; // active or inactive
}
