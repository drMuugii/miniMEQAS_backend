import { Column, HasMany, Model, Table } from 'sequelize-typescript';

@Table
export class Program extends Model {
  @Column({ primaryKey: true })
  id: string;
  @Column
  programName: string;
  @Column
  programNumber: string;
  @Column
  programType: string;
  @Column
  startDate: Date;
  @Column
  endDate: Date;
  @Column
  status: string;
}
