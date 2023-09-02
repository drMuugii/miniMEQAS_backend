import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Program } from 'src/resource/program/models/program.model';

@Table
export class ResultCollect extends Model {
  @Column({ primaryKey: true })
  id: string;

  @Column
  @ForeignKey(() => Program)
  ProgramId: string;

  @Column
  sampleType: string;
  @Column
  sampleNumber: string;
  @Column
  wbc: number;
  @Column
  rbc: number;
  @Column
  hgb: number;
  @Column
  hct: number;
  @Column
  plt: number;
  @Column
  mcv: number;
  @Column
  mch: number;
  @Column
  mchc: number;
}
