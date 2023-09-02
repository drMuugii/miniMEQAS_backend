import { Injectable } from '@nestjs/common';

@Injectable()
export class InstrumentService {
  getHello(): string {
    return 'Hello Muuguu!';
  }
}
