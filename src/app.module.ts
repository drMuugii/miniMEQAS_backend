import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ParticipantModule } from './resource/participant/participant.module';
import { ProgramModule } from './resource/program/program.module';
import { ResultModule } from './resource/result/result.module';
import { InstrumentModule } from './resource/instrument/instrument.module';
import { Participant } from './resource/participant/models/participant.model';
import { Program } from './resource/program/models/program.model';
import { Instrument } from './resource/instrument/model/instrument.model';
import { ProgramUser } from './resource/program/models/program_user.model';
import { InstrumentModel } from './resource/instrument/model/instrument_model.model';
import { ResultCollect } from './resource/result/models/result_collect.model.ts';
import { ResultSummary } from './resource/result/models/result_summary.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'mini_meqas_database',
      autoLoadModels: true,
      synchronize: true,
      models: [
        Participant,
        Program,
        ProgramUser,
        Instrument,
        InstrumentModel,
        ResultCollect,
        ResultSummary,
      ],
    }),
    ParticipantModule,
    ProgramModule,
    ResultModule,
    InstrumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
