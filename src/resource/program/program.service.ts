import { Injectable } from '@nestjs/common';

@Injectable()
export class ProgramService {
  getHello(): string {
    return 'Hello Muuguu!';
  }
}
