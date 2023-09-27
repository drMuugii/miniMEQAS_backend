import {    
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Instrument } from 'src/resource/instrument/model/instrument.model';

import { ResultCollect } from './result_collect.model.ts.js';

@Table
export class ResultSummary extends Model {
  @Column({ primaryKey: true })
  id: string;
  @Column


  @Column
  @ForeignKey(() => ResultCollect)
  ResultCollectId: string;

  @Column
  @ForeignKey(() => Instrument)
  InstrumentId: string;
}
