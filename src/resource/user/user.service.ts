import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { Instrument } from '../instrument/model/instrument.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  getUser(): any {
    return this.userModel.findAll({
      include: [
        {
          model: Instrument,
        },
      ],
    });
  }
}
